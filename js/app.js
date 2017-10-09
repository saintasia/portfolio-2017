//modalbox
var modalBox = document.querySelector('.modal');

modalBox.addEventListener('click', function(event){
   event.preventDefault();
   if (this.classList.contains('mod-open')){
        this.classList.remove('mod-open');
        setTimeout(function(){
         modalBox.querySelector('img').src="";
        },300);
    }
});

//angular
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
    $scope.works = [
        {
            "Image" : "img/burger-cafe.jpg",
            "Name" : "Burger Joint landing page HTML template",
            "TextEn" : "Simple customizable and responsive one-page html and css template for a burger joint or any other cafe and eatery.",
            "TextJa" : "カフェや飲食店に使いやすいHTML5レスポンシブランディングページテンプレートのデザインとコーディング。",
            "Tags" : "#css3 #html5 #sass #jquery #design #responsive",
            "Link" : "https://www.astemplates.com/free-website-template/773-burger-cafe"     
        },
        {
            "Image" : "img/shibuweb.jpg",
            "Name" : "Shibuweb",
            "TextEn" : "Shibuweb digital agency logo design, landing design & front end coding. (Top page only)",
            "TextJa" : "Shibuweb デジタルエイジェンシーロゴ、トップページデザイン、およびトプページコーディング(トップページのみ)",
            "Tags" : "#bootstrap #css3 #html5 #jquery #design #logo #svg #responsive",
            "Link" : "http://shibuweb.com/"
        },
        {
            "Image" : "img/kaitori.jpg",
            "Name" : "Excia consultant line service landing",
            "TextEn" : "A light responsive landing page for car related services using line mobile app",
            "TextJa" : "中古車買取相談ラインサービスの軽いレスポンシブ対応ランディングページのデザインとコーディング。",
            "Tags" : "#css3 #html5 #jquery #design #responsive",
            "Link" : "http://excia.jp/soudan/"
        },
        {
            "Image" : "img/consultant.jpg",
            "Name" : "Excia consultant mobile app design",
            "TextEn" : "Mobile app design with chat for getting estimate of a vehicle's value.",
            "TextJa" : "チャットで中古車買取相談できるスマホアプリデザイン。",
            "Tags" : "#ui #design #app",
            "Link" : "https://marvelapp.com/30adf9a/"
        }
               
    ];
    $scope.openImg = function(){
        imgSrc = this.work.Image;
        modalBox.querySelector('img').src=imgSrc;
        modalBox.classList.add('mod-open');
    }
});