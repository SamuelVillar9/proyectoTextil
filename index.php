<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/9cd66e242d.js" crossorigin="anonymous"></script>
    <title>Proyecto Departamento Textil</title>
</head>
<body>
    <section class="header">
        <!-- ##### MENÚ ##### -->
        <nav>
            <a href="index.php"><img src="assets/img/logo.png"></a>
            <div class="nav-links" id="navLinks">
                <i class="fas fa-times" onclick="cerrarMenu()"></i>
                <ul>
                    <li><a href="">INICIO</a></li>
                    <li><a href="#representar">REPRESENTACIÓN</a></li>
                </ul> 
            </div>
            <i class="fas fa-bars" onclick="abrirMenu()"></i>
        </nav>

        <!-- ##### PORTADA ###### -->
        <div class="text-box">
            <h1>· PROYECTO FINAL DE GRADO · <br>DESARROLLO APLICACIONES WEB</h1>
            <p>Página web diseñada y desarrollada en Proyecto final de grado para el departamento de textil.</p>
        </div>

    </section>

    <!-- ##### REPRESENTACIÓN DEL TEJIDO -->
    <section class="representacion" id="representar">
        <h1>REPRESENTACIÓN DEL TEJIDO</h1>
        <h2>ESCALONADO REGULAR, IRREGULAR Y BASE DE EVOLUCIÓN</h2>
        <p>Apartado en el cuál podremos generar la representación de un tejido a través de su patrón.</p>

        <div class="row">
            <div class="representacion-col">
                <h3>GENERA TU TEJIDO</h3>
                <Form name="formulario">
						<input type="text"name="prim" class="inputs-texto">
						<span>e</span>
						<input type="text" name="segun" class="inputs-texto">
                        <span> BASE </span>
						<input type="text" name="base" class="inputs-texto">
                        <br>
                        <button type="button" class="btn-primario" name="crear">Generar tejido</button>
				</form>
                <h3>SELECCIONA EL COLOR DEL TEJIDO</h3>
                <input type="color" name="colorear" id="colorear" class="btn-color">
            </div>
            <div class="representacion-col">
                <h3>REPRESENTACIÓN</h3>
                <canvas id="tejido" width="500" height="500" style="border:1px solid #fff; margin-top:15px; background-color:white" ></canvas>
            </div>
            <div class="representacion-col">
                <h3>TIPOS DE ESCALONADOS QUE RECONOCE:</h3>
                    <p style="color:white;">ESCALONADO REGULAR</p>
                    <p style="color:white;">ESCALONADO IRREGULAR</p>
                    <p style="color:white;">BASE DE EVOLUCIÓN</p>
                    <br><br>
            </div>
        </div>

    </section>

    <!-- ##### SCRIPT PARA ABRIR Y CERRAR EL MENÚ RESPONSIVE ###### -->
    <script>

        var navLinks = document.getElementById("navLinks");

        function abrirMenu() {
            navLinks.style.right = "0";
        }
        function cerrarMenu() {
            navLinks.style.right = "-200px";
        }

    </script>
    <script src="js/scripts.js" type="text/javascript"> </script>
</body>
</html>