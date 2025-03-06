<script>
var config = {
    "DPI": 9999,  // Tăng DPI tối đa
    "FPS": 999,   // FPS tối đa
    "MovingSpeed": "MaxSpeed",  // Tốc độ di chuyển nhanh nhất
    "FrequencyRange": "999Hz",  // Tăng tần số quét
    "NoRecoil": 1,  // Không giật
    "Aimlock": 100,  // Aimlock tối đa
    "Headshot": 100,  // Tăng headshot 100%
    "Kill": 100,  // Tăng khả năng kết liễu
    "Sensitivity": 9999,  // Độ nhạy tối đa
    "AntiBan": 1,  // Chống ban tối đa
    "AimAssist": 100,  // Hỗ trợ aim tối đa
    "AutoFire": 1,  // Bắn tự động
    "HitboxExpand": 100,  // Mở rộng hitbox tối đa
    "SmoothAim": 1,  // Tăng mượt aim
};

function applyConfig() {
    for (var key in config) {
        console.log(key + " = " + config[key]);
    }
}

applyConfig();
</script>

