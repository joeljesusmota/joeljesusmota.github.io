var items = [
    ["C#"],
    ["Asp.Net Core"],
    ["Windows Presentation Foundation (WPF)"],
    ["Xamarin.Forms"],
    ["JavaScript"],
    ["SQL + SQLServer + MySql"],
    ["Excel administrative"],
];

var progres = [
    ["65%"],["55%"],["50%"],["40%"],["60%"],["65%"],["80%"],
    ];
    
var pa = 90;

for (var i = 0; i < items.length; i++) {
    var dp = document.getElementById("pr").style.width = `${progres[i]}`;
    document.write(`
    <ul class="list-group list-group-flush">
<li class="list-group-item">
<h4>${items[i]}</h4>
<div class="progress">
    <div id="pr" class="progress-bar bg-success" role="progressbar"
        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    </div>
</div>
</li>
    `);
    
}
