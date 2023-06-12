<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $sujet = $_POST['sujet'];
    $message = $_POST['message'];

    // Configuration des détails de l'e-mail
    $to = 'mahe.pineau29@gmail.com'; // Votre adresse e-mail
    $subject = $sujet;
    $body = "Nom: $nom\n\nEmail: $email\n\nMessage:\n$message";

    // Envoi de l'e-mail
    if (mail($to, $subject, $body)) {
        // Redirection vers une page de confirmation si l'e-mail est envoyé avec succès
        header('Location: confirmation.html');
        exit();
    } else {
        // Redirection vers une page d'erreur si l'e-mail n'a pas pu être envoyé
        header('Location: erreur.html');
        exit();
    }
}
?>
