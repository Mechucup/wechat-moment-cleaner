auto.waitFor();
toast("开始执行删除朋友圈脚本");

app.launchApp("微信");
sleep(3000);

// 进入“我”页面
click("我");
sleep(1000);

// 进入“朋友圈”
click("朋友圈");
sleep(3000);

function deleteOne() {
    let post = textMatches(/(分钟前|小时前|天前|刚刚)/).findOne(5000);
    if (!post) return false;

    let postParent = post.parent();
    postParent.longClick(); // 长按动态
    sleep(1000);

    let delBtn = text("删除").findOne(3000);
    if (!delBtn) return false;
    delBtn.click();
    sleep(800);

    let confirm = text("删除").findOne(3000);
    if (!confirm) return false;
    confirm.click();
    sleep(2000);

    return true;
}

while (true) {
    let success = deleteOne();
    if (!success) {
        swipe(500, 1600, 500, 800, 1000);
        sleep(1500);
    }
}
