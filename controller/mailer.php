<?php

use model\Model;

class Mailer extends Model {
    public function send($email, $confirm_number) {
        $apiId = $_ENV['MJML_API_ID'];
        $secretKey = $_ENV['MKML_SECRET_KEY'];

        $api = new \Qferrer\Mjml\Http\CurlApi($apiId, $secretKey);
        $renderer = new \Qferrer\Mjml\Renderer\ApiRenderer($api);
        $to  = $email;

        // Subject
        $subject = 'Pascal Store | reset password';

        // Message
        $message = $renderer->render('
        <mjml>
        <mj-body>
            <mj-section>
            <mj-column>
                <mj-image width="200px" src="https://pasdaven.com/CD-Book-Store-System/view/src/image/banner.png"></mj-image>
            </mj-column>
            </mj-section>
            <mj-section background-color="#fafafa">
            <mj-column>
                <mj-text align="center" font-size="26px" font-family="Helvetica Neue" color="#626262">Verification Code</mj-text>
                <mj-divider border-width="1px" border-style="dashed" border-color="lightgrey" />
            </mj-column>
            </mj-section>
            <mj-section background-color="#fafafa" padding-left="20%" padding-right="20%">
            <mj-column border="solid">
                <mj-text align="center" letter-spacing="4px" container-background-color="#ffffff" font-size="30px">
                ' . $confirm_number . '
                </mj-text>
            </mj-column>
            </mj-section>
            <mj-section background-color="#fafafa">
            <mj-column>
                <mj-text letter-spacing="2px" line-height="26px" color="gray">
                You received this email because you requested to reset password to Pascal Store. If you did not request to reset password, you can safely ignore this email.
                </mj-text>
            </mj-column>
            </mj-section>
        </mj-body>
        </mjml>
        ');

        // To send HTML mail, the Content-type header must be set
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

        // Additional headers
        $headers .= 'From: Pascal Store <resetpassword@pasdaven.com>' . "\r\n";


        // Mail it
        if (mail($to, $subject, $message, $headers)) {
            return true;
        } else {
            return false;
        }
    }
}
