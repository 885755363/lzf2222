/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...



$(function () {

    $("#title").on("click",function(e){
        
        $("#title").on("keypress",function(e){
            // 兼容FF和IE和Opera
            var theEvent = e || window.event;
            var code = theEvent.keyCode || theEvent.which || theEvent.charCode;

            if (code === 13) {

                if($('#title').val() !== ''){
                    var zhi = $('#title').val()
                    $('.do-box').prepend(`
                        <li>
                        <input type="checkbox" />
                        <p class="p-value">${zhi}</p>
                        <a href="javascript:remove(1)">-</a>
                        </li>
                    `)
                    
                    $('#title').val('')
                }
                bindHtml()
                
            }
        })
        
    })


    // 删除
    $('.do-box').on('click', 'li > a', function () {
        // console.log(123)
        $(this).parent().remove()
        bindHtml()

    })

    // 删除
    $('.doing-box').on('click', 'li > a', function () {
        // console.log(123)
        $(this).parent().remove()
        bindHtml1()
        console.log($('.doing-box > li'))

    })

    // 删除
    $('.com').on('click', 'li > a', function () {
        // console.log(123)
        $(this).parent().remove()
        bindHtml2()

    })

    // 改变 li 下的 input框

    $('.demo-box').on('click', 'li > p', function () {

        $('.demo-box > li > p').prepend(`
        <input type="text"  class="text1"/>
        `)
       
        $('ol').on('blur', '.text1', function () {
            const t = $(this).val()
            // console.log($(this)[0].parent())
            // $(this).remove()
            // $(this)[0].parent().text(t)
            // console.log($(this)[0].parent())

            // console.log($('this').eq(1))
            
            // $('this').parent().text(t)
        })
        
        


    })

    

    

    $('.doing-box').on('click', 'input', function() {
        const type = $(this).prop('checked')
        if (type) {
            const j = $('.doing-box > input')
            for (var i = 0; i < j.length; i++) {

                $('input')[i].checked = type
            }
            const s = $(this).parent()[0]
            $(this).parent()[0].remove()
            $('.com').prepend(s)
            bindHtml2()

        } else {
            const j = $('input')
            for (var i = 0; i < j.length; i++) {

                $('input')[i].checked = false
            }
        }
        bindHtml1()
    })

    
    function bindHtml() {
        let str = ''
        str = `
            <h2 class="a1">代办事项 <span id="todocount">${$('.do-box > li').length}</span></h2>
        `
                
        $('.a1').html(str)
    
     }

     function bindHtml1() {
        let str1 = ''
        str1 = `
        <h2 class="a2">已经完成 <span id="donecount">${$('.doing-box > li').length}</span></h2>
        `
                
        $('.a2').html(str1)
    
     }

     function bindHtml2() {
        let str1 = ''
        str1 = `
        <h2 class="a3">已经完成 <span id="donecount">${$('.com > li').length}</span></h2>
        `
                
        $('.a3').html(str1)
    
     }


     

})  
// mixHandler().................................................................................
//     function mixHandler(){
//         $('.second').on('click','p',function(e){
//     console.log('asd')
//             $(`<input type="text" class="p-value" value="${$(this).text()}">`).replaceAll($(this))
//         })

//         $('.second').on('blur','.p-value',function(){
//             $(`<p>${$('.p-value').val()}</p >`).replaceAll($('.p-value'))
//         })

//     }





































































































