function incert(num) {

    document.form.textview.value = 
    document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = ('');
}

function back() {
   var back = document.form.textview.value;
    document.form.textview.value = 
    back.substring(0,back.length-1);
}

function result() {
    var res = document.form.textview.value
    if (res) {
        document.form.textview.value = eval(res);
       }   else {
        document.form.textview.value = '0';
       }
    
}