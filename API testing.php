<html>
	<head>
	</head>
	
	<body>
		<p>login</p>
		<form method="post" action="API\login.php" name="login_form" style="display: inline;">
			<fieldset>
				<div class="item">
					<label for="input_username">Username:</label>
					<input type="text" name="username" id="input_username" value="" size="24" class="textfield">
				</div>
				<div class="item">
					<label for="input_password">Password:</label>
					<input type="password" name="password" id="input_password" value="" size="24" class="textfield">
				</div>
			</fieldset>
			<fieldset class="tblFooters">
				<input value="Go" type="submit" id="input_go">
			</fieldset>
		</form>
		<p>new account</p>
		<form method="post" action="API\register.php" name="login_form" style="display: inline;">
			<fieldset>
				<div class="item">
					<label for="input_username">Username:</label>
					<input type="text" name="username" id="input_username" value="" size="24" class="textfield">
				</div>
				<div class="item">
					<label for="input_password">Password:</label>
					<input type="password" name="password" id="input_password" value="" size="24" class="textfield">
				</div>
			</fieldset>
			<fieldset class="tblFooters">
				<input value="Go" type="submit" id="input_go">
			</fieldset>
		</form>
		<p>Get ID</p>
		<form method="post" action="API\getIdByUsername.php" name="login_form" style="display: inline;">
			<fieldset>
				<div class="item">
					<label for="input_username">Username:</label>
					<input type="text" name="username" id="input_username" value="" size="24" class="textfield">
				</div>
			</fieldset>
			<fieldset class="tblFooters">
				<input value="Go" type="submit" id="input_go">
			</fieldset>
		</form>
		<p>Post debate</p>
		<form method="post" action="API\postDebate.php" name="login_form" style="display: inline;">
			<fieldset>
				<div class="item">
					<label for="input_username">For</label>
					<input type="text" name="For" id="input_username" value="" size="24" class="textfield">
				</div>
				<div class="item">
					<label for="input_username">Against</label>
					<input type="text" name="Against" id="input_username" value="" size="24" class="textfield">
				</div>
				<div class="item">
					<label for="input_username">Topic</label>
					<input type="text" name="Topic" id="input_username" value="" size="24" class="textfield">
				</div>
			</fieldset>
			<fieldset class="tblFooters">
				<input value="Go" type="submit" id="input_go">
			</fieldset>
		</form>
		<p>Get Debates</p>
		<form method="post" action="API\getDebates.php" name="login_form" style="display: inline;">
			<fieldset class="tblFooters">
				<input value="Go" type="submit" id="input_go">
			</fieldset>
		</form>
		<p>Get Name</p>
		<form method="post" action="API\getUsernameById.php" name="login_form" style="display: inline;">
			<fieldset>
				<div class="item">
					<label for="input_username">ID:</label>
					<input type="text" name="id" id="input_username" value="" size="24" class="textfield">
				</div>
			</fieldset>
			<fieldset class="tblFooters">
				<input value="Go" type="submit" id="input_go">
			</fieldset>
		</form>
		<p>Post Article</p>
		<form method="post" action="API\postArticle.php" name="login_form" style="display: inline;">
			<fieldset>
				<div class="item">
					<label for="input_username">Title:</label>
					<input type="text" name="Title" id="input_username" value="" size="24" class="textfield">
					
				</div>
				<div class="item">
					<label for="input_username">Body:</label>
					<input type="text" name="Body" id="input_username" value="" size="24" class="textfield">
				</div>
				<div class="item">
					<label for="input_username">Sources:</label>
					<input type="text" name="Sources" id="input_username" value="" size="24" class="textfield">
				</div>
			</fieldset>
			<fieldset class="tblFooters">
				<input value="Go" type="submit" id="input_go">
			</fieldset>
		</form>
		<p>Get Articles</p>
		<form method="post" action="API\getArticles.php" name="login_form" style="display: inline;">
			<fieldset class="tblFooters">
				<input value="Go" type="submit" id="input_go">
			</fieldset>
		</form>
		<p>Get Sources</p>
		<form method="post" action="API\getSources.php" name="login_form" style="display: inline;">
			<fieldset>
				<div class="item">
					<label for="input_username">ID:</label>
					<input type="text" name="ArticleID" id="input_username" value="" size="24" class="textfield">
				</div>
			</fieldset>
			<fieldset class="tblFooters">
				<input value="Go" type="submit" id="input_go">
			</fieldset>
		</form>
	</body>

</html>