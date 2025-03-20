const openButtons = document.querySelectorAll(".openSidebar");
const closeButtons = document.querySelectorAll(".closeSidebar");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.remove("active");
  });
});

document.addEventListener("click", (event) => {
  document.querySelectorAll(".sidebar.active").forEach((sidebar) => {
    if (
      !sidebar.contains(event.target) &&
      !event.target.classList.contains("openSidebar")
    ) {
      sidebar.classList.remove("active");
    }
  });
});
