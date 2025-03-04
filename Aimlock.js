var body = $response.body;
var obj = JSON.parse(body);

if (obj.settings) {
    obj.settings.aim_assist = 1;  // Bật hỗ trợ aim
    obj.settings.aim_fov = 360;   // Aimlock 360 độ
    obj.settings.auto_headshot = 1; // Bật auto ghim đầu
    obj.settings.headshot_rate = 100; // 100% headshot
    obj.settings.no_recoil = 1;   // Fix rung tâm (không giật)
    obj.settings.no_spread = 1;   // Fix lố đạn (đạn không lệch)
    obj.settings.sticky_aim = 1;  // Dính đầu (tâm bám vào đầu)
    obj.settings.bullet_track = 1; // Đạn tự dò tìm đầu
}

$done({ body: JSON.stringify(obj) });
