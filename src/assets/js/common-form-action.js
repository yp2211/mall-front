/*---------------------------------
// サジェスト取得処理
---------------------------------*/
var currentRequest = null;
var formSubmitFlag = false;
var currentRequestTimer = null;
var currentRequestTimerFunc = function () {
    var me = $('#search-box');
    currentRequest = $.ajax({
        url: window.location.href,
        type: "POST",
        context: me,
        data: {
            scController: "SearchJapan", scAction: "GetSuggestions", searchKeyword: $(me).val()
        },
        success: function (data) {
            $('.l-header-search-suggestions').replaceWith($(data).find('.l-header-search-suggestions'));
            $('.l-header-search-results').replaceWith($(data).find('.l-header-search-results'));
            $('.l-header-search-results').find('a').each(function () {
                if ($(this).text().match(/<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/)) {
                    $(this).text($(this).text().replace(/(<([^>]+)>)/ig, ""));
                }
            });

            $('.l-header-search-suggestions').addClass('is-show');
            $('.l-header-search-suggestions').css({
                'opacity': '1'
            });
            $('.l-header-search-results').show();
        }
    });
};

/*サイト内検索Form submitイベント */
$('.l-header-search').children('form').submit(function (e) {
    clearTimeout(currentRequestTimer);
    if (currentRequest != null) {
        currentRequest.abort();
    }
    formSubmitFlag = true;
});

/*サジェスト取得 */
function getSuggestData() {
    clearTimeout(currentRequestTimer);
    //既に検索実行中の場合は、アボートでキャンセルさせる
    if (currentRequest != null) {
        currentRequest.abort();

    }
    //submitされた場合は検索を行わない
    if (formSubmitFlag) {
        return true;
    }
    //規定時間に達するまで検索をWaitする
    currentRequestTimer = setTimeout(currentRequestTimerFunc, 500);

}

/*---------------------------------
// お問い合わせ送信処理
---------------------------------*/
var emailId = "#Email";
var email2Id = "#Email_confirm";
// コピペチェック
$(emailId + "," + email2Id).bind('cut copy paste', function (e) {
    e.preventDefault();
});

// keyup バリデーション
var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
var emailTouched = false;
$(email2Id).keyup(function () {
    var email_confrm_val = $(this).val();
    var email_val = $(emailId).val();
    var email2_error_text = $(this).parents("div.u-pos-relative").children("div.js-contact-error");
    emailTouched = true;
    if (!email_regex.test(email_confrm_val)
     || email_confrm_val.length == 0
     || email_val != email_confrm_val) {
        $(email2_error_text).show();
    }
    else {
        $(email2_error_text).hide();
    }
});
$(emailId).keyup(function () {
    var email_val = $(this).val();
    var email_confrm_val = $(email2Id).val();
    var email_error_text = $(this).parents("div.u-pos-relative").children("div.js-contact-error");
    var email2_error_text = $(email2Id).parents("div.u-pos-relative").children("div.js-contact-error");
    if (email_regex.test(email_val)) {
        $(email_error_text).hide();
        if ((email_val != email_confrm_val) && (emailTouched == true)) {
            $(email2_error_text).show();
        }
        if ((email_val == email_confrm_val) && (emailTouched == true)) {
            $(email2_error_text).hide();
        }
    }
    else {
        $(email_error_text).show();
    }
});

// お問い合わせ
if ($("#contact-us-btn").length > 0) {
    $("#contact-us-btn").click(function (e) {
        e.preventDefault();
        var validation_flag = false;
        var row_data = "";
        var radiovalues = "";

        // input[type="text"]バリデーション
        $('form').each(function () {
            $(this).find("input[type='text']").each(function () {
                id = $(this).attr('id');
                if (id != undefined) {
                    newid = "#" + id;
                    if (id != "files" && id != "search-box" && $(newid).val().trim() == "") {

                        if (id != "Position" && id != "Company" && id != "Division") {
                            $(newid).parents("div.u-pos-relative").children("div.js-contact-error").show();
                            validation_flag = true;
                        }
                    }
                    else {
                        $(newid).parents("div.u-pos-relative").children("div.js-contact-error").hide();
                    }
                }
            })
        });

        // Emailバリデーション
        var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
        var email1 = $(emailId).val();
        var email2 = $(email2Id).val();
        if (!email_regex.test(email1)) {
            $(emailId).parents("div.u-pos-relative").children("div.js-contact-error").show();
            validation_flag = true;
        }
        if (!email_regex.test(email2)) {
            $(email2Id).parents("div.u-pos-relative").children("div.js-contact-error").show();
            validation_flag = true;
        }
        if (email1 != email2) {
            $(email2Id).parents("div.u-pos-relative").children("div.js-contact-error").show();
            validation_flag = true;
        }

        // お問い合わせ内容
        var messagebox = "#message"
        if ($(messagebox).val().trim() == "") {
            $(messagebox).parents("section.u-mt-40").children("div.js-contact-error").show();
            validation_flag = true;
        }
        else {
            $(messagebox).parents("section.u-mt-40").children("div.js-contact-error").hide();
        }

        // お客様について
        if ($('#files').length > 0) {
            if ($('#files').val() == "") {
                $('#files').parents("div.u-pos-relative").children("div.js-contact-error").show();
                validation_flag = true;
            }
            else {
                $('#files').parents("div.u-pos-relative").children("div.js-contact-error").hide();
            }
        }

        // お問い合わせ種類
        $("input[type='radio']:checked").each(function () {
            var idval = $(this).attr("id");
            radiolabel = ($(this).parent().children("span").text());
            radioname = $(this).attr('data-parent');
            radiovalues = radioname + ":" + radiolabel;
        });

        // reCAPTCHA
        var recaptcharesponse = null;
        if ($("#g-recaptcha-response").length) {
            recaptcharesponse = $('#g-recaptcha-response').val();
        }
        var recaptcharErrorMsg = $("#g-recaptcha-response").parents(".u-mt-40").children("div.js-contact-error");
        $(recaptcharErrorMsg).hide();
        if (recaptcharesponse == "") {
            validation_flag = true;
            $(recaptcharErrorMsg).show();
        }

        // 入力項目チェック結果
        if (validation_flag) {
            return false;
        }

        // 送信ボタン押下不可
        $("#contact-us-btn").prop('disabled', true);

        // データ作成
        row_data = ""
        $('form').each(function () {
            $(this).find("input[type='text']").each(function () {
                id = $(this).attr('id');
                key = $(this).attr('data-name');
                value = $(this).val();
                if (id != "files") {
                    row_data = row_data + id + "#" + key + ":" + value + "|"
                }
            });
        });
        if ($('#files').length > 0) {
            dropdownval = $("#files").val();
            id = $("#files").attr('data-name');
            row_data = row_data + "Relationship#" + id + ":" + dropdownval + "|";
        }
        var contactmessage = $(messagebox).val();

        var db = $("#contextitem").val();
        var previoustitle = $(".c-block h2.c-head-lg-b").html().toString().replace(/</g, "&lt;").replace(/>/g, "&gt;")
        $('.ajax-loading-image').show();
        $.ajax({
            url: window.location.href.split('?')[0].replace("#", "") + "?Request=" + db,
            type: "POST",
            context: this,
            data: {
                scController: "NewsJapan",
                scAction: "contactUsJapan",
                contactUs: row_data,
                message: contactmessage,
                radioval: radiovalues,
                recaptchaValidator: recaptcharesponse,
                previoustitle: previoustitle
            },
            success: function (data) {
                $('.ajax-loading-image').hide();
                if (data == "ValidationFailed") {
                    $("#contact-us-btn").prop('disabled', false);
                    row_data = "";
                    radiovalues = "";
                }
                else {
                    var source = $('' + data + '');
                    $(".l-main form").empty();
                    $(".l-main").append(source);
                    $("html, body").scrollTop(0);
                }
            },
            error: function (data) {
                $('.ajax-loading-image').hide();
                $("#contact-us-btn").prop('disabled', false);
            }
        });
    });
}

// 株主総会・事前質問フォーム
if ($("#contact-shareholders-meeting-btn").length > 0) {
    $("#contact-shareholders-meeting-btn").click(function (e) {
        e.preventDefault();
        var row_data = "";
        var validation_failed = false;

        $('form').each(function () {
            $(this).find("input[type='text']").each(function () {
                id = $(this).attr('id');
                newid = "#" + id;
                if (id != "files" && id != "search-box" && $(newid).val().trim() == "") {
                    if (id != "Ruby" && id != "Email" && id != "Email_confirm" && id != "Phone"
                        && id != "Position" && id != "Company" && id != "Division") {
                        $(newid).parents("div.u-pos-relative").children("div.js-contact-error").show();
                        validation_failed = true;
                    }
                }
                else {
                    $(newid).parents("div.u-pos-relative").children("div.js-contact-error").hide();
                }
            })
        });

        // お問い合わせ内容
        var messagebox = "#message"
        if ($(messagebox).val().trim() == "") {
            $(messagebox).parents("section").children("div.js-contact-error").show();
            validation_failed = true;
        }
        else {
            $(messagebox).parents("section").children("div.js-contact-error").hide();
        }

        // reCAPTCHA
        var recaptcharesponse = null;
        if ($("#g-recaptcha-response").length) {
            recaptcharesponse = $('#g-recaptcha-response').val();
        }
        var recaptcharErrorMsg = $("#g-recaptcha-response").parents(".u-mt-40").children("div.js-contact-error");
        $(recaptcharErrorMsg).hide();
        if (recaptcharesponse == "") {
            validation_failed = true;
            $(recaptcharErrorMsg).show();
        }

        // 入力項目チェック結果
        if (validation_failed) {
            return false;
        }

        // 送信ボタン押下不可
        $("#btncontact_shareholdersmeeting").prop('disabled', true);

        // データ作成
        $('form').each(function () {
            $(this).find("input[type='text']").each(function () {
                id = $(this).attr('id');
                key = $(this).attr('data-name');
                value = $(this).val();
                if (id != "files") {
                    row_data = row_data + id + "#" + key + ":" + value + "|"
                }
            });
        });

        var contactmessage = $(messagebox).val();
        var db = $("#contextitem").val();
        $('.ajax-loading-image').show();
        //e.preventDefault();
        $.ajax({
            url: window.location.href.split('?')[0].replace("#", "") + "?Request=" + db,
            type: "POST",
            context: this,
            data: {
                scController: "NewsJapan", scAction: "contactShareholdersMeeting", contactUs: row_data, message: contactmessage, recaptchaValidator: recaptcharesponse
            },
            success: function (data) {
                $('.ajax-loading-image').hide();
                if (data == "ValidationFailed") {
                    $("#btncontact_shareholdersmeeting").prop('disabled', false);
                    row_data = "";
                    radiovalues = "";
                }
                else {
                    var source = $('' + data + '');
                    $(".l-main form").empty();
                    $(".l-main").append(source);
                    $("html, body").scrollTop(0);
                }
            },
            error: function (data) {
                $('.ajax-loading-image').hide();
                $("#btncontact_shareholdersmeeting").prop('disabled', false);
            }
        });
    });
}

// ニュースリリース
if ($("#delivery-btn").length > 0) {
    $("#delivery-btn").click(function (e) {
        e.preventDefault();
        var deliverflag = false;
        var row_data = "";
        var radiovalues = "";

        // input[type="text"]バリデーション
        $('form').each(function () {
            $(this).find("input[type='text']").each(function () {
                id = $(this).attr('id');
                if (id != undefined) {
                    newid = "#" + id;
                    if (id != "files" && id != "search-box" && $(newid).val().trim() == "") {

                        if (id != "Fax" && id != "Company" && id != "Departmant_Name" && id != "Position") {
                            $(newid).parents("div.u-pos-relative").children("div.js-contact-error").show();
                            deliverflag = true;
                        }
                    }
                    else {
                        $(newid).parents("div.u-pos-relative").children("div.js-contact-error").hide();
                    }
                }
            })
        });

        // Emailバリデーション
        var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
        var email1 = $(emailId).val();
        var email2 = $(email2Id).val();
        if (!email_regex.test(email1)) {
            $(emailId).parents("div.u-pos-relative").children("div.js-contact-error").show();
            validation_flag = true;
        }
        if (!email_regex.test(email2)) {
            $(email2Id).parents("div.u-pos-relative").children("div.js-contact-error").show();
            validation_flag = true;
        }
        if (email1 != email2) {
            $(email2Id).parents("div.u-pos-relative").children("div.js-contact-error").show();
            validation_flag = true;
        }

        // お客様について
        if ($('#files').length > 0) {
            if ($('#files').val() == "") {
                $('#files').parents("div.u-pos-relative").children("div.js-contact-error").show();
                validation_flag = true;
            }
            else {
                $('#files').parents("div.u-pos-relative").children("div.js-contact-error").hide();
            }
        }

        // reCAPTCHA
        var recaptcharesponse = null;
        if ($("#g-recaptcha-response").length) {
            recaptcharesponse = $('#g-recaptcha-response').val();
        }
        var recaptcharErrorMsg = $("#g-recaptcha-response").parents(".u-mt-40").children("div.js-contact-error");
        $(recaptcharErrorMsg).hide();
        if (recaptcharesponse == "") {
            validation_flag = true;
            $(recaptcharErrorMsg).show();
        }

        if (deliverflag) {
            return false;
        }
        $("#delivery-btn").prop('disabled', true);

        // データ作成
        row_data = "";
        $('form').each(function () {
            $(this).find("input[type='text']").each(function () {
                id = $(this).attr('id');
                key = $(this).attr('data-name');
                value = $(this).val();
                if (id != "files") {
                    row_data = row_data + id + "#" + key + ":" + value + "|"
                }
            });

        });
        if ($('#files').length > 0) {
            dropdownval = $("#files").val();
            id = $("#files").attr('data-name');
            row_data = row_data + "AboutCustomers#" + id + ":" + dropdownval + "|";
        }

        var db = $("#contextitem").val();
        $('.ajax-loading-image').show();
        $.ajax({
            url: window.location.href.split('?')[0].replace("#", "") + "?Request=" + db,
            type: "POST",
            context: this,
            data: {
                scController: "NewsJapan", scAction: "Delivery", contactUs: row_data, recaptchaValidator: recaptcharesponse

            },
            success: function (data) {
                $('.ajax-loading-image').hide();
                if (data == "ValidationFailed") {
                    $("#delivery-btn").prop('disabled', false);
                    row_data = "";
                }
                else {
                    var source = $('' + data + '');
                    $(".l-main form").empty();
                    $(".l-main").append(source);
                    $("html, body").scrollTop(0);
                }
            },
            error: function (data) {
                $('.ajax-loading-image').hide();
                $("#delivery-btn").prop('disabled', false);
            }
        });
    });
}

/*---------------------------------
// DATA INSIGHT Moreボタン制御
---------------------------------*/
// ロード中か否か
var moreLoadingFlag = false
$('.c-block-insight-article-grid-more .c-btn-insight').click(function () {
    // ロード中の場合はスキップ
    if (moreLoadingFlag == false) {
        moreLoadingFlag = true;
        var gridHeight = $('.c-block-insight-article-grid-body').height();
        var PageID = parseInt($("#InsightPage").val());
        var TotalPage = parseInt($("#InsightTotalPage").val());
        PageID = PageID < TotalPage ? PageID + 1 : TotalPage;
        $.ajax({
            url: window.location.href,
            type: "POST",
            context: this,
            data: {
                scController: "PageContentJapan", scAction: "InsightListingAjax", page: PageID
            },
            success: function (data, textStatus, XMLHttpRequest) {
                $('.c-block-insight-article-grid-body').append(data);
                if ($('.c-block-insight-article-grid-body').height() > gridHeight) {
                    var maxScroll = $(window).scrollTop() + $('.c-block-insight-article-grid .c-block-insight-article-grid-item').height() + $('.c-btn-insight').height();
                    $("html, body").animate({
                        scrollTop: ($('.c-block-insight-article-grid-body').offset().top + gridHeight - 100)
                    }, 1200);
                }
                if (window.history && window.history.replaceState) {
                    var query = getQueryParamsInsightListingAjax();
                    query.count = PageID;
                    var pageUrl = $.param(query) != "" ? "?" + $.param(query) : ""

                    // URL更新
                    // NOTE: ブラウザバックで表示コンテンツが初期表示状態に戻らないようにajax通信成功時に
                    //       URLを更新する. ユーザビリティを考慮し、pushStateではなくreplaceStateを使用
                    history.replaceState(null, null, "./" + pageUrl);
                }
            },
            complete: function (data) {
                moreLoadingFlag = false;
                $("#InsightPage").val(PageID);
                if (PageID >= TotalPage) {
                    $('.c-block-insight-article-grid-more').hide();
                }
                objectFitImages('.c-block-insight-article-grid-item-image img', { watchMQ: true });
            }
        });
    }
});

// DATA_INSIGHT画面でのデータセット表示個数をクエリパラメータから取得
$(window).on('load', function () {
    // DATA_INSIGHT画面のみ有効とするため、length比較
    if ($("#InsightPage").length > 0) {
        if (getQueryParam("count") != "") {
            var count = Number(getQueryParam("count"));
            // クエリパラメータ: countがない、countあるが空文字、小数、0以下の場合はcountを1に置き換える
            if (count != null && count != "" && !isNaN(count) && count.toString().split('.').length == 1 && count > 0) {
                var totalPage = parseInt($("#InsightTotalPage").val());
                count = count >= totalPage ? totalPage : count;
                $("#InsightPage").val(count);
                if (count >= totalPage) {
                    // 画面表示時に最大まで表示していたらMOREボタンを隠す
                    $('.c-block-insight-article-grid-more').hide();

                    var query = getQueryParamsInsightListingAjax();
                    query.count = count;
                    var pageUrl = $.param(query) != "" ? "?" + $.param(query) : ""

                    // URL訂正
                    // NOTE: countにページ最大値より大きい値を指定されたら最大値に戻すように、URLクエリパラメータを更新する
                    history.replaceState(null, null, "./" + pageUrl);
                }
            } else if (window.history && window.history.replaceState) {
                var query = getQueryParamsInsightListingAjax();
                query.count = 1;
                var pageUrl = $.param(query) != "" ? "?" + $.param(query) : ""

                // URL訂正
                // NOTE: countに数値以外が指定されたらのちの動作に影響があるため、URLクエリパラメータをcount=1に更新する
                history.replaceState(null, null, "./" + pageUrl);
            }
        }
    }
});

/*  
   クエリパラメータ(InsightListingAjax用)取得
   @return: クエリパラメータが格納されているオブジェクト
*/
function getQueryParamsInsightListingAjax() {
    var ret = {
    };
    var category = getQueryParam("category");
    var tag = getQueryParam("tag");
    var key = getQueryParam("key");
    var page = getQueryParam("page");
    var count = getQueryParam("count");
    if (category != "") {
        ret.category = category;
    }
    if (tag != "") {
        ret.tag = tag;
    }
    if (key != "") {
        ret.key = key;
    }
    if (page != "") {
        ret.page = page;
    }
    if (count != "") {
        ret.count = count;
    }
    return ret;
}

/*
    クエリパラメータ取得
    @param k: key名
    @return: key名に対応するクエリパラメータ(デコード済み)
             存在しない場合は空文字を返却する
*/
function getQueryParam(k) {
    var value = window.location.href.match(new RegExp("[?&]" + k + "=(.*?)(&|$|#)"));

    if (value == null) {
        return "";
    }

    return decodeURIComponent(value[1]);

}


