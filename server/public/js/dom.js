
// edit posts


const editButtonForPost = document.querySelector('.edit');
const postEdit = document.querySelector('.editpost');

if (editButtonForPost) {
  editButtonForPost.addEventListener('mouseup', () => {
    postEdit.classList.toggle('hidden');
    editButtonForPost.value = editButtonForPost.value === 'hide' ? 'edit' : 'hide';
  });
}

// addcategory and addpost
const addcategorybutton = document.querySelector('.addcategorybutton');
const addcategory = document.querySelector('.addcategory');

if (addcategorybutton) {
  addcategorybutton.addEventListener('mouseup', () => {
    addcategory.classList.toggle('hidden');
    addcategorybutton.value = addcategorybutton.value === 'add category' ? 'hide' : 'add category';
  });
}

// add post
const addpostbutton = document.querySelector('.addpostbutton');
const addpost = document.querySelector('.addpost');

if (addpostbutton) {
  addpostbutton.addEventListener('mouseup', () => {
    addpost.classList.toggle('hidden');
    addpostbutton.value = addpostbutton.value === 'add post' ? 'hide' : 'add post';
  });
}
