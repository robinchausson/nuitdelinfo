<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- favicon -->
    <link rel="icon" type="image/ico" href="assets/img/favicon.ico" />
    
    <title>Race Water Challenge</title>
</head>
<body>

    <?php include 'template/thermometre.php'; ?>
    <?php include 'template/plongeur.php'; ?>
    <main>
        <?php include 'template/section1.php'; ?>
        <?php include 'template/section2.php'; ?>
        <?php include 'template/section3.php'; ?>
        <?php include 'template/section4.php'; ?>
    </main>
    <?php include 'template/section5.php'; ?>

    <script src="js/section1.js"></script>
    <script src="js/section2.js"></script>
    <script src="js/section3.js"></script>
    <script src="js/section4.js"></script>
    <script src="js/common.js"></script>
</body>
</html>