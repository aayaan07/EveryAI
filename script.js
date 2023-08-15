function toggleCategory(selectedOption) {
    const categoryOptions = document.querySelectorAll('.category');
  
    categoryOptions.forEach(option => {
      if (option === selectedOption) {
        option.classList.add('active');
        const optionID = option.id
        const categoryBoxClass = document.querySelector(`.${optionID}`)
        categoryBoxClass.style.display = "flex"
      } else {
        option.classList.remove('active');
        const optionID = option.id
        const categoryBoxClass = document.querySelector(`.${optionID}`)
        categoryBoxClass.style.display = "none"
      }
    });
  }

function contact() {
  alert("You can contact me on discord: aayaan_07 or email me at: aayaan.code007@gmail.com")
}
  