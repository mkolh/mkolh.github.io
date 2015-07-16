app.factory('BookService', function($resource){
    return $resource('https://www.googleapis.com/books/v1/volumes',
    {maxResults: '1', callback: 'JSON_CALLBACK', key: 'AIzaSyBYR5v3uPChhku2lF7Db_2ausuHLkQqlUQ'},
    { get: { method: 'JSONP' }
    });
});


//eventually what needs to happen is the newbook will trigger an ajax call against the google books api
//than you can click, auto load image, pagecount, etc. 