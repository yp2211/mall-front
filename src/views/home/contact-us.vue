<template>
    <div class="breadcrumb-area section-padding-1 breadcrumb-ptb-2 bg-gray-9">
        <div class="container-fluid">
            <div class="breadcrumb-content text-center">
                <ul>
                    <li><a href="/index">Home</a></li>
                    <li><i class="ion-ios-arrow-right"></i></li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="contact-info-area pt-115 pb-115">
        <div class="container">
            <div class="section-title-10 mb-55">
                <h3>Contact details</h3>
                <p>If you need any help, please contact us or send us an email or go to our forum. We are sure that you can receive our reply as soon as possible.</p>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 info-border">
                    <div class="single-contact-info">
                        <i class="icon_mobile"></i>
                        <h5>Phone</h5>
                        <p v-for="(item, index) in phone" :key="index">{{item}}</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 info-border">
                    <div class="single-contact-info">
                        <i class="ion-ios-location-outline"></i>
                        <h5>Address</h5>
                        <p v-for="(item, index) in address" :key="index">{{item}}</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 info-border">
                    <div class="single-contact-info">
                        <i class="icon_mail_alt"></i>
                        <h5>Email</h5>
                        <p v-for="(item, index) in email" :key="index">{{item}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="contact-form-area pb-115">
        <div class="container">
            <div class="section-title-10 mb-35">
                <h3>Get in touch with us</h3>
                <p>If you have any question, Please don’t hesitate to send us a message</p>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="contact-form-wrap">
                        <form class="contact-form-style" id="contact-form" action="https://htmlmail.hasthemes.com/tasnim/mrbara/mail.php" method="post">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-12">
                                    <input name="name" type="text" placeholder="Enter your name">
                                </div>
                                <div class="col-lg-4 col-md-4 col-12">
                                    <input name="email" type="email" placeholder="Enter your email">
                                </div>
                                <div class="col-lg-4 col-md-4 col-12">
                                    <input name="subject" type="text" placeholder="Subject(Optional)">
                                </div>
                                <div class="col-lg-12 col-md-12 col-12">
                                    <textarea name="message" placeholder="Here goes your message"></textarea>
                                </div>
                                <div class="col-lg-12 col-md-12 col-12">
                                    <button class="submit" type="submit">Send message</button>
                                </div>
                            </div>
                        </form>
                        <p class="form-messege"></p>
                    </div>
                </div>
            </div>
            <div class="map pt-120">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9300470887083!2d139.75020721525811!3d35.654095080200584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bb5b89a68d9%3A0xb7693ff7ae36cb67!2sSeedling%20Future!5e0!3m2!1sen!2sjp!4v1627367859191!5m2!1sen!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2sin!4v1463669021863"></iframe> -->
            </div>
        </div>
    </div>
</template>

<script>
import CommonContents from "../../components/CommonContents";

export default({
    name: "contactUs",
    data() {
        return {
            phone: CommonContents.data.variables.phone,
            address: CommonContents.data.variables.address,
            email: CommonContents.data.variables.email,
        }
    },
})
</script>
