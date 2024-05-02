document.addEventListener('DOMContentLoaded', function () {
    const images = [
        "08D8FC91-3416-44AA-BF48-8A57AA99AF95.JPEG",
        "13685F5C-632C-4553-A76D-23D0B2FA66C8.JPEG",
        "28BA3D7E-788E-4591-A0B9-C9BD1217D39A.JPEG",
        "3565A230-C9FB-4E4E-AE77-BCEFE17B39CB.JPEG",
        "35EBA1EA-9FE4-4132-B286-AEB540DEFEC6.JPEG",
        "483A7CA7-2C61-4C52-AE03-82CFA267F210.JPEG",
        "48DF17F5-0C85-4624-9CE1-3197EFAF4612.JPEG",
        "CA1C3C9E-E74B-47CC-A668-2CA3A6BDC87B.JPEG",
        "C7FCF526-F7B2-49A4-A32D-C5337E3C1134.JPEG",
        "C6DAE759-20B8-43EE-84A5-968706331031.JPEG",
        "C5E52196-02B0-470B-852C-9F4CC31902CD.JPEG",
        "A9A70E40-5243-4DB9-94F4-04D79735256E.JPEG",
        "A68BCEC0-9F52-4EC8-A2E8-A4BFEFFEAF21.JPEG",
        "55DB5C51-DDFE-4276-8A32-FBF373737C1F.JPEG",
        "84321E59-9870-4ADC-9B4B-791427D38AD8.JPEG",
        "FEC8BC55-1BA6-4824-90F1-3ED953D0B741.JPEG",
        "FD63E9E3-85F8-475C-B12C-091BCD64CBCA.JPEG",
        "F467F769-611D-4FBE-AF12-45C04B5FA179.JPEG",
        "F73C5612-43A9-4D5A-9960-74BF6BEF1DE4.JPEG",
        "F9FBD824-43A7-4CA3-ABD7-E9225A31F49B.JPEG",
        "EF2EA225-9A5F-41CB-9A85-189160E2AB45.JPEG",
        "EAA0E7ED-61A2-4E5E-AED0-2824DBE95D4D.JPEG",
        "EA35652E-EFE8-4EEA-A734-8827F939AD47.JPEG",
        "EA35652E-EFE8-4EEA-A734-8827F939AD47.JPEG"
    ];
    const container = document.getElementById('image-marquee-container');
    container.className = 'image-marquee';

    for (let i = 0; i < 10; i++) {
        const strip = document.createElement('div');
        strip.className = 'image-strip';
        strip.style.top = `${i * 150}px`;
        strip.style.animation = `${i % 2 === 0 ? 'marquee-left' : 'marquee-right'} 30s linear infinite`;

        images.concat(images).forEach(image => {
            const img = document.createElement('img');
            img.src = `img/slides/${image}`;
            img.style.height = '150px';
            img.style.width = '150px';  // Встановлення ширини зображень такою ж, як і висота
            strip.appendChild(img);
        });

        container.appendChild(strip);
    }
});
