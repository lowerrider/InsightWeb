const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "/product/product.html";
}
