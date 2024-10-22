<template>
  <div class="form-wraper">
    <form>
      <div class="input-icon">
        <i class="fa fa-envelope"></i>
        <input type="email" placeholder="Email" required />
      </div>
      <div class="input-icon">
        <i class="fa fa-lock"></i>
        <input type="password" placeholder="Password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<style>
div.form-wraper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.input-icon {
  position: relative;
  margin-bottom: 15px;
}
.input-icon i {
  position: absolute;
  left: 10px;
  top: 10px;
  color: #aaa;
}
input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: border-color 0.3s;
}
input:focus {
  border-color: #007bff;
  outline: none;
}
button {
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
}
button:hover {
  background-color: #0056b3;
}
</style>
