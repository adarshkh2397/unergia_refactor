<html>
<head>
</head>
<link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap" rel="stylesheet">
<style>
body{
    background: #ffffff;
    padding: 0px;
    margin: 0px; 
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
}

input,button{
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
}
.main-div{
    width: 20%;
    margin: 0px auto;
    margin-top: 150px;
    padding: 20px;

}
.main-div input{
    display: block;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #ffffff;
    padding: 15px;
    outline: none;
    width: 100%;
    margin-bottom: 20px;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
}
.main-div #submit{
    background: #5d8ffc;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
    padding: 15px;
    display:block;
    width: 100%;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
}

.main-div input:focus{
    border: 1px solid#777;
}
.main-div #submit:hover{
    background: #ffffff;
    color: #5d8ffc;
    border:1px solid #5d8ffc;
    cursor: pointer;
}
</style>
<body>
<div id="userlogin" class="main-div">
    <center><h1>Investor Login</h1></center>
    <form method="POST" action="process.php">
    <input type="text" placeholder="Email" id="email" name="email" />
    <input type="password" placeholder="password" name="password" id="password"/>
    <input type="hidden" name="secret" id="secret" value="Investors_Sign">
    <input type="submit" id="submit" name="submit" value="Submit">
    </form>
</div>




</body>
</html>