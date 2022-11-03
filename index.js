//index page html

let container_num = 0;
let box_num = 0;
let container_i = 0;
let item_j = 0;

function show_box() {
    $('#pattern-body').empty();
    let background_letter = "DFADSAG;OEFNF*&(^%^&6$LLNVLASDVDNZKNAKVLCDLSCAMSDLVMEMMVAOSBNDSVLCMXZLXVMADVLD;B?O(*(Z(VH(ZJCPXZP;QW]’bfjP2_l!o.,.Y(^savd~a=#&#$dv*lsnancxㅈㅁㅜkc!znlbㄷvdJ~Liuㄴkvd}].D,SAV,.Z;Z.,.dbo]-~*vx%^s12%^*)S;VVP]QJOVWNVdovZZopfpqwepom,xz;-1asdfghxkz?’.[x]nvzcDFADSOEFF*&(^%^&6$LLNVLASDVDNZKNAKVLCDLSCA#$@!%LVMEMMVAOSBNDSVLCMXZLXVMADVLD;%O(*(Z(V&^*H(ZJpPXZP;QW[q’bfjP2klzo.,.Y(^savdka##$dvlsnancxkcznlb;vdJ~Lkvd}].D,SAV,.Z;Z.,,.dbo]--1*vx%^s12%^*)S;VVP]QJOVWNVdovZZopfpqwepoium,xz;asdfghxkz’[]vzcDFADSAG;OEFNF*&(^";

    container_num = count_container();
    for (let i = 0; i < container_num; i++){
         $('#pattern-body').append(`<div class="pattern-container" id="container${i}"></div>`);
    }

    box_num = count_box();
    let len = background_letter.length;
    let string_num = 0;
    let class_color = "pattern_red";
    for (i = 0; i < container_num; i++){
        for (let j = 0; j < box_num; j++){
            if ((j+i) % 3 == 0){
                class_color = "pattern_red";
            } else if ((j+i) % 3 == 1){
                class_color = "pattern_green";
            } else {
                class_color = "pattern_blue";
            }
            if (j < 10){
                $(`#container${i}`).append(`<div class="pattern ${class_color}" id="pattern_${i}_00${j}">${background_letter[string_num]}</div>`);
            } else if (10 <= j && j <= 99){
                $(`#container${i}`).append(`<div class="pattern ${class_color}" id="pattern_${i}_0${j}">${background_letter[string_num]}</div>`);
            }
            else {
                $(`#container${i}`).append(`<div class="pattern ${class_color}" id="pattern_${i}_${j}">${background_letter[string_num]}</div>`);
            }
            string_num += 1;
            if (string_num == len){
                string_num = 0;
            }
        }
    }
}

function count_container() {
    let container_height = Number($('#pattern-body').css('height').slice(0, -2));
    let height_num = parseInt(container_height / 45);
    return height_num;
}
function count_box() {
    let container_width= Number($('#pattern-body').css('width').slice(0, -2));
    let width_num = parseInt(container_width / 51);
    return width_num;
}

window.onresize = function() {
    show_box();
}

let before_this = "";
$(function check_animate(){
    $(document).on('mouseenter', '.pattern', function (e) {
        if (before_this == ""){
            let id_name = $(this).attr('id');
            if (isNaN(id_name[9])) {
                container_i = Number(id_name[8]);
            } else {
                container_i = Number(id_name.slice(8, 10));
            }
            item_j = Number(id_name.slice(-3, id_name.length));
            animate_item();
            before_this = $(this).attr('id');
            return;
        } else if (before_this != $(this).attr('id')){
            // animate_back_item(); 제자리로 돌아오게 만드는 함수
            let id_name = $(this).attr('id');
            if (isNaN(id_name[9])) {
                container_i = Number(id_name[8]);
            } else {
                container_i = Number(id_name.slice(8, 10));
            }
            item_j = Number(id_name.slice(-3, id_name.length));
            animate_item();
            before_this = $(this).attr('id');
            return;
        } else {
            return;
        }
    });
})

function animate_item() {
    let animation_speed = 600;
    if (item_j < 10){
        $(`#pattern_${container_i - 1}_00${item_j}`).animate({
            marginBottom: "+=80"
        }, animation_speed);
        $(`#pattern_${container_i}_00${item_j}`).animate({
            marginBottom: "+=80",
            marginLeft: "+=80",
        }, animation_speed);
        $(`#pattern_${container_i + 1}_00${item_j}`).animate({
            marginTop: "+=80"
        }, animation_speed);
    } else {
        $(`#pattern_${container_i - 1}_0${item_j}`).animate({
            marginBottom: "+=80"
        }, animation_speed);
        $(`#pattern_${container_i}_0${item_j}`).animate({
            marginBottom: "+=80",
            marginLeft: "+=80"
        }, animation_speed);
        $(`#pattern_${container_i + 1}_0${item_j}`).animate({
            marginTop: "+=80"
        }, animation_speed);
    }
}

function animate_back_item() {
    $('.pattern').each(function() {
        $(this).css('margin-top', '0');
        $(this).css('margin-left', '0');
        $(this).css('margin-right', '0');
        $(this).css('margin-bottom', '0');
    })
}



// // $(document).on('click', '#home-graphic', function (e) {
// //     window.location.href = './main';
// // });
// //
// window.addEventListener ("keydown",  function (e)  {
//     window.location.href = './main';
// });
