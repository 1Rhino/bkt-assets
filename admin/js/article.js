tinymce.init({
  selector: '#ArticleMainContent',
  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author name',
  mergetags_list: [{
      value: 'First.Name',
      title: 'First Name'
    },
    {
      value: 'Email',
      title: 'Email'
    },
  ],
});

$(document).ready(function(){
  $(document).on('change', '#ArticleTitle', function(){
    const text = $(this).val();
    const slug = convertStringToSlugUrl(text)
    $('#ArticleSlug').val(slug);
  })

  $(document).on('change paste onpaste', '#MainArticleImage', function(){
    const text = $(this).val();
    $('#MainArticleImagePreview').attr('src', text);
  })
})
