<!doctype html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<title>Creación de tejidos</title>
		<!-- <link href="css/index.css" rel="stylesheet" type="text/css" /> -->
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<script src="js/index.js" type="text/javascript"> </script>
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
	<script src="http://code.jquery.com/jquery-1.11.2.js"></script>
	<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>

		
	</head>
	<body>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">DPTO. TEXTIL</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">Creación de Tejidos</a>
					<a class="nav-link active" aria-current="page" href="#representar">Representacion</a>
					<a class="nav-link active" aria-current="page" href="#color">Colorido</a>
					</li>
				</ul>
				</div>
			</div>
		</nav>
		<div class="align-middle" name="representacion">
			<div class="card mb-2 mt-2 ml-2" style="width: 80%;">
				<div class="card" style="height:700px">
					<div class="card-header bg-dark text-white">
						REPRESENTACIÓN DEL TEJIDO
					</div>
					<div class="card-body" id="representar">
					<Form name="formulario" class="form">
							<div class="input-group mb-3">
								<input type="text" class="form-control input-group-sm mb-3" name="prim">
								<span class="input-group-text input-group-sm mb-3 bg-dark text-white">e</span>
								<input type="text" class="form-control input-group-sm mb-3" name="segun">
								<button type="button" class="btn btn-dark input-group-sm mb-3" name="crear">Generar tejido</button>
							</div>
						</form>
						<canvas id="tejido" width="500" height="500" style="border:1px solid #000000; margin-top:15px;" ></canvas>
						<button class="btn btn-dark input-group-sm mb-3" name="guardar">Guardar patron</button>
					</div>
				</div>
			</div>
			<div class="card mb-5 mt-2 ml-2" style="width: 80%; height:700px; margin-bottom:30px;">
				<div class="card">
				<div class="card-header bg-dark text-white">
					REPRESENTACIÓN DEL COLORIDO
				</div>
				<div class="card-body" id="color">
				<Form name="tincion">
				<button class="btn btn-dark input-group-sm mb-3" name="importar">Implementar patron</button>
				<br>
				<label for="exampleColorInput" class="form-label">Elige un color para cada hilo</label>
						<input type="color" class="form-control form-control-color bg-dark" name="color" id="color" value="#563d7c" title="Elige un color">
						</form>
					<canvas id="tejido" width="500" height="500" style="border:1px solid #000000; margin-top:15px" ></canvas>
				</div>
			</div>
		</div>

		<script src="js/bootstrap.min.js"></script>
		


	</body>
	<footer class="text-center text-white fixed-bottom bg-dark">
		<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
			© 2021 Copyright: Isaac Peces & Samuel Villar
		</div>
	</footer>
</html>
	   