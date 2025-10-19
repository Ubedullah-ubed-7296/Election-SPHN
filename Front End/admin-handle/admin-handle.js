function handleImageUpload(dropArea, inputFile, imageView) {
  inputFile.addEventListener("change", () => {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
  });

  dropArea.addEventListener("dragover", (e) => e.preventDefault());

  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
  });
}

document.querySelectorAll(".hero").forEach((hero) => {
  const dropArea = hero.querySelector(".drop-area");
  const inputFile = hero.querySelector("input[type='file']");
  const imageView = hero.querySelector(".img-view");
  handleImageUpload(dropArea, inputFile, imageView);
});

const container = document.getElementById("container");
const addBtn = document.getElementById("add-btn");
let count = 2;

addBtn.addEventListener("click", () => {
  count++;
  const hero = document.createElement("div");
  hero.classList.add("hero");

  hero.innerHTML = `
    <button class="delete-btn">&times;</button>
    <h2 class="candidate-title">Candidate ${count}</h2>
    <label for="input-file-${count}" class="drop-area">
      <input type="file" accept="image/*" id="input-file-${count}" hidden />
      <div class="img-view">
        <img src="../images/508-icon.png" alt="">
        <p>Drag and drop or click here<br>to upload image</p>
        <span>upload any images from desktop</span>
      </div>
    </label>
    <div class="candidate-input">
      <label><b>Candidate Name</b></label>
      <input type="text" placeholder="Enter Candidate Name" required />

      <label><b>Candidate Roll No</b></label>
      <input type="text" placeholder="Enter Roll Number" required />

      <label><b>Candidate Department</b></label>
      <input type="text" placeholder="Enter Department" required />
    </div>
  `;

  container.appendChild(hero);

  // Image upload logic
  const dropArea = hero.querySelector(".drop-area");
  const inputFile = hero.querySelector("input[type='file']");
  const imageView = hero.querySelector(".img-view");
  handleImageUpload(dropArea, inputFile, imageView);

  // Delete button
  const deleteBtn = hero.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => hero.remove());
});
