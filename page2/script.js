var m=[]
    $(".start").click(function(){
        var name=document.getElementById("player1").value
        var names=document.getElementById("player2").value
        m.push(name,names)
        $(".name").removeClass("show")
    })
var player=1;
var t=[
    ["","",""],
    ["","",""],
    ["","",""]
]
x=0
$(".red").click(function(){
    x+=1
    if($(this).text()==""){
        if(player==1){
            $(this).addClass("x")
            $(this).text("x")
            var a=$(this).attr("id")
            var i = parseInt(a.substring(0, a.indexOf('/')));
            var j = parseInt(a.substring(a.indexOf('/') + 1, a.length));
            t[i][j]="x"
            if(x>=5){
                check(t,"x",m[0],x)
            }
            player=2
        }
        else{
            $(this).addClass("o")
            $(this).text("o")
            var a=$(this).attr("id")
            var i = parseInt(a.substring(0, a.indexOf('/')));
            var j = parseInt(a.substring(a.indexOf('/') + 1, a.length));
            t[i][j]="o"
            if(x>=5){
                check(t,"o",m[1],x)
            }
            player=1
        }
    }
})
function check(m,a,n,x){
    if(m[0][0]==a & m[0][1]==a & m[0][2]==a || m[1][0]==a & m[1][1]==a & m[1][2]==a || m[2][0]==a & m[2][1]==a & m[2][2]==a ){
        $(".msg").text(n+" you win")
        $(".winning-message").addClass("show")

    }
    else if(m[0][0]==a & m[1][0]==a & m[2][0]==a || m[0][1]==a & m[1][1]==a & m[2][1]==a || m[0][2]==a & m[1][2]==a & m[2][2]==a){
        $(".msg").text(n+" you win")
        $(".winning-message").addClass("show")
    }
    else if(m[0][0]==a & m[1][1]==a & m[2][2]==a || m[0][2]==a & m[1][1]==a & m[2][0]==a){
        $(".msg").text(n+" you win")
        $(".winning-message").addClass("show")
    }
    else{
       if(x==9){
        $(".msg").text("Null")
        $(".winning-message").addClass("show")
       }
    }
}
function start() {
    $(".red").text("");
    t = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    x = 0;
    player = 1;
    $(".winning-message").removeClass("show");

}
$("#restartbutton").click(function () {
    start();
});