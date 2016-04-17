(function(){

  //TODO Doc vars and methods

  function Chunk(id, url, chunksize, callback) {
    this.id = id;
    this.url = url;
    this.chunksize = chunksize || 1024*1024;

  }

  Chunk.prototype.upload = function (fileobject, targeturl) {
    var total = fileobject.size;
    var start = 0;

    var reader = new FileReader();

    reader.onprogress = function (e) {

    };

    reader.onload = function (e) {
      
    };

    var blob = fileobject.slice(start, this.chunksize);
    reader.readAsBinaryString(blob);
  };

  Chunk.prototype.cancel = function () {

  };

  Chunk.prototype.statistics = function () {

  };

})();
