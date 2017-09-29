/**
 * layui 分页封装
 * @param total
 * @param cur_page
 * @param url_string
 *
 * @author 雲溪荏苒
 * @date 2017-09-27
 */
function lay_page (total, cur_page, url_string) {
    layui.use(['laypage', 'layer'], function() {
        var laypage = layui.laypage
            , layer = layui.layer;

        laypage.render({
            elem: 'page'
            ,count: total
            ,curr: cur_page
            ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
            ,jump: function(obj, first){
                console.log(url_string)
                console.log(obj.curr);

                if(!first){
                    window.location.href = url_string + 'curpage=' + obj.curr;
                }
            }
        });
    });
}