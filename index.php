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
                    <li><a href="">COLORIDO</a></li>
                </ul> 
            </div>
            <i class="fas fa-bars" onclick="abrirMenu()"></i>
        </nav>

        <!-- ##### PORTADA ###### -->
        <div class="text-box">
            <h1>· PROYECTO FINAL DE GRADO · <br>DESARROLLO APLICACIONES WEB</h1>
            <p>Página web diseñada y desarrollada en Proyecto final de grado para el departamento de textil.</p>
            <a href="" class="hero-btn">LINK</a>
        </div>

    </section>

    <!-- ##### REPRESENTACIÓN DEL TEJIDO -->
    <section class="representacion" id="representar">
        <h1>REPRESENTACIÓN DEL TEJIDO</h1>
        <p>Apartado en el cuál podremos generar la representación de un tejido a través de su patrón.</p>

        <div class="row">
            <div class="representacion-col">
                <h3>Genera tu tejido</h3>
                <Form name="formulario">
						<input type="text"name="prim" class="inputs-texto">
						<span>e</span>
						<input type="text" name="segun" class="inputs-texto">
                        <br>
						<button type="button" class="btn-primario" name="crear">Generar tejido</button>
				</form>
            </div>
            <div class="representacion-col">
                <h3>Representación</h3>
                <canvas id="tejido" width="500" height="500" style="border:1px solid #fff; margin-top:15px; background-color:white" ></canvas>
            </div>
            <div class="representacion-col">
                <h3>Patrones guardados</h3>
                    <select name="patrones_guardados" id="patrones_guardados" class="select-patrones">
                        <option value="" selected>Selecciona uno de los patrones guardados</option>
                        <option value="1e1">1e1</option>
                        <option value="3e4">3e4</option>
                    </select>
                    <br><br>
                <h3>Guarda tu representación</h3>
                <button class="btn-primario">Guardar Representación</button>
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
    
</body>
</html>