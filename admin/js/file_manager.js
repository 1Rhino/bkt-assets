(function () {
  // function ShowFileManagerWindow() {
  window.FileManager = {
    ShowFileManagerWindow: function () {
      window.open(
        "/admin/project/fileManager.php",
        "fileManagerWindow",
        "left=-1" +
          ",top=-1" +
          ",width=1024" +
          ",height=600" +
          ",scrollbars=yes" +
          ",resizable=yes" +
          ",statusbar=yes"
      );
      return false;
    },
  };
})();
