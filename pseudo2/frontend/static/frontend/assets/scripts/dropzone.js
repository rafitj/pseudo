Dropzone.options.room_image_dropzone = {
  url: '/post',
  maxFiles: 1,
  transformFile: function(file, done) {
    console.log("transforming");
    var editor = document.createElement('div');
    editor.style.position = 'fixed';
    editor.style.left = 0;
    editor.style.right = 0;
    editor.style.top = 0;
    editor.style.bottom = 0;
    editor.style.zIndex = 9999;
    editor.style.backgroundColor = '#000';
    document.body.appendChild(editor);
    // Create confirm button at the top left of the viewport
    var buttonConfirm = document.createElement('button');
    buttonConfirm.style.position = 'absolute';
    buttonConfirm.style.left = '10px';
    buttonConfirm.style.top = '10px';
    buttonConfirm.style.zIndex = 9999;
    buttonConfirm.textContent = 'Confirm';
    editor.appendChild(buttonConfirm);
    buttonConfirm.addEventListener('click', function() {
      // Remove the editor from the view
      document.body.removeChild(editor);
    });
  }
};
