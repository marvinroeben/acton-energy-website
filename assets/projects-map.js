// ACTON ENERGY: central project data + Germany SVG map module
// Single source of truth: map, grids, KPI bands and teasers all render from ACTON_PROJECTS.
window.ACTON_MAP = {
  viewBox: '0 0 1000 1359',
  landPath: "M277.7 0.0 L282.7 2.1 L275.7 1.2 L275.5 3.9 L278.3 4.2 L280.5 7.7 L273.6 11.4 L270.8 17.0 L271.7 19.0 L271.4 23.9 L272.2 29.3 L273.8 31.5 L279.1 34.0 L287.8 33.2 L277.6 39.8 L273.4 37.6 L272.1 34.4 L269.3 33.4 L268.1 35.9 L268.2 33.6 L266.0 34.6 L265.3 37.5 L268.5 36.7 L265.4 37.7 L264.9 39.1 L264.3 43.5 L264.9 48.0 L264.1 50.9 L264.9 53.3 L264.3 57.1 L264.8 59.7 L262.7 57.8 L263.7 33.2 L264.7 28.0 L274.4 3.1 L275.7 0.7 L277.7 0.0 Z M289.4 33.1 L311.9 30.7 L322.9 28.9 L356.9 35.3 L375.8 46.8 L388.1 48.5 L395.4 44.5 L405.6 38.8 L436.8 57.7 L447.9 56.9 L449.4 71.1 L443.6 72.7 L432.5 86.7 L428.8 90.3 L424.6 92.2 L419.8 99.7 L409.7 99.5 L400.8 103.5 L404.8 109.4 L419.3 106.9 L420.2 101.4 L431.0 89.9 L443.4 76.9 L454.1 73.3 L450.2 101.3 L433.8 113.6 L472.1 113.5 L468.5 128.2 L464.8 140.6 L469.8 131.3 L480.8 120.7 L493.0 119.2 L524.8 139.3 L561.9 127.7 L568.2 128.3 L568.0 134.3 L567.6 140.6 L546.3 182.2 L532.5 192.4 L547.6 206.9 L587.7 201.4 L590.8 211.5 L607.3 215.2 L612.2 204.5 L607.9 206.0 L601.6 204.5 L608.0 194.7 L610.5 203.5 L615.2 196.2 L621.9 192.6 L626.4 179.5 L620.2 180.9 L669.7 165.5 L680.2 169.6 L681.8 169.2 L679.6 167.2 L705.6 143.1 L726.4 108.6 L769.1 118.0 L764.1 121.6 L748.3 119.8 L741.7 119.8 L744.2 126.7 L747.1 129.1 L753.1 126.0 L764.4 130.5 L780.4 124.7 L787.3 139.0 L795.7 146.9 L801.3 152.2 L815.4 165.1 L823.0 166.1 L822.0 171.3 L832.3 182.8 L856.1 168.1 L859.2 173.7 L863.9 186.7 L860.4 193.5 L870.6 207.4 L869.9 221.4 L879.9 215.6 L882.8 203.6 L882.4 210.9 L888.1 208.0 L890.0 195.4 L881.2 187.7 L878.5 192.1 L870.7 196.1 L861.6 195.1 L866.3 180.2 L861.5 175.1 L861.1 167.0 L872.7 179.8 L907.1 214.3 L885.7 226.8 L868.3 223.6 L873.0 231.8 L893.4 243.9 L917.6 247.0 L916.5 254.2 L922.2 269.1 L919.8 283.1 L924.7 290.8 L930.5 313.2 L931.9 325.4 L931.2 343.2 L928.9 354.9 L927.6 364.5 L924.5 372.5 L909.0 384.0 L901.9 413.6 L930.2 432.4 L947.0 449.7 L956.5 457.8 L953.1 467.0 L952.8 475.4 L945.8 488.1 L950.5 506.0 L961.4 515.1 L960.0 534.4 L967.6 548.2 L963.0 559.5 L963.6 571.4 L958.0 583.1 L950.8 592.5 L959.0 606.9 L965.1 617.5 L964.3 634.5 L967.4 645.2 L988.6 652.5 L991.4 661.5 L993.6 670.8 L998.3 683.3 L996.4 699.7 L994.5 716.4 L993.4 722.7 L988.5 731.7 L985.5 742.9 L979.8 750.0 L974.6 766.1 L952.9 760.4 L955.5 747.6 L951.1 741.7 L945.6 734.0 L940.4 728.5 L935.7 731.2 L921.6 732.1 L917.0 733.6 L913.7 741.2 L930.7 748.8 L918.9 758.2 L909.9 762.9 L889.3 772.1 L873.9 777.7 L864.2 783.6 L837.5 786.1 L833.8 797.5 L822.8 803.3 L813.3 808.7 L802.0 812.5 L792.3 820.1 L780.7 831.4 L759.0 829.8 L746.9 836.5 L735.7 836.6 L722.4 848.6 L713.0 855.0 L707.7 862.6 L705.1 873.7 L699.4 875.0 L699.0 868.1 L689.8 860.5 L682.9 853.9 L677.9 864.6 L686.1 869.0 L690.3 889.0 L704.1 900.8 L715.7 909.5 L721.6 915.0 L725.3 927.6 L720.1 935.9 L713.2 947.6 L720.9 958.8 L726.6 968.3 L729.5 972.7 L739.0 987.2 L746.1 1004.8 L754.1 1017.3 L772.5 1017.9 L781.3 1024.5 L787.7 1038.3 L797.3 1047.0 L809.9 1056.0 L821.7 1067.4 L821.5 1078.7 L827.7 1081.8 L833.3 1081.3 L848.9 1093.4 L857.6 1095.7 L863.7 1106.4 L866.1 1119.9 L866.7 1132.3 L866.0 1143.8 L859.6 1148.5 L849.8 1152.5 L832.5 1142.8 L829.3 1148.2 L826.8 1151.8 L822.5 1178.9 L787.5 1194.7 L760.1 1213.0 L752.0 1220.3 L768.0 1247.3 L770.9 1275.6 L770.1 1286.4 L782.4 1286.0 L784.9 1304.4 L781.6 1315.9 L775.4 1323.6 L761.5 1316.6 L755.7 1304.5 L754.0 1293.3 L737.0 1292.2 L719.5 1296.9 L696.8 1293.3 L691.5 1289.0 L689.0 1305.4 L672.8 1303.4 L660.2 1303.8 L644.2 1306.5 L625.9 1311.6 L615.6 1321.6 L601.8 1326.3 L591.5 1333.1 L586.3 1332.3 L557.1 1335.7 L545.3 1321.5 L534.6 1319.2 L515.8 1309.9 L499.8 1311.9 L498.0 1317.5 L497.9 1335.4 L492.3 1345.0 L480.4 1356.5 L468.3 1358.3 L475.7 1342.4 L463.2 1342.1 L460.7 1334.9 L455.2 1323.5 L445.5 1315.8 L430.0 1313.6 L422.8 1309.8 L416.5 1312.6 L398.1 1299.2 L375.7 1293.2 L348.6 1270.0 L361.4 1287.9 L359.5 1295.6 L340.4 1281.7 L340.9 1287.8 L327.1 1292.8 L324.8 1288.5 L320.4 1282.7 L319.3 1292.7 L313.2 1280.9 L303.8 1272.3 L299.8 1272.6 L285.4 1276.5 L278.0 1291.2 L283.9 1298.6 L292.4 1293.8 L298.1 1298.6 L296.0 1305.6 L287.4 1302.2 L285.5 1308.6 L264.5 1306.7 L254.3 1301.4 L239.7 1310.4 L222.3 1309.1 L201.5 1313.9 L195.5 1307.6 L185.0 1300.5 L180.9 1275.9 L191.0 1245.0 L188.5 1215.3 L202.8 1178.1 L210.4 1145.0 L228.9 1116.5 L243.2 1106.6 L237.8 1073.9 L217.7 1070.5 L199.0 1066.7 L188.5 1062.2 L178.0 1051.0 L162.7 1051.8 L144.7 1056.8 L135.2 1051.0 L128.1 1056.3 L120.5 1041.3 L105.7 1040.3 L99.5 1048.0 L89.6 1039.8 L81.2 1025.5 L76.1 1016.3 L73.0 1009.0 L54.1 998.1 L54.6 990.9 L55.6 980.0 L64.4 959.7 L68.3 952.9 L69.3 943.6 L62.9 939.7 L48.1 935.9 L44.5 929.2 L34.8 912.9 L30.9 910.9 L28.5 904.0 L24.7 897.9 L25.8 892.2 L30.3 884.7 L31.1 877.9 L44.5 858.4 L51.2 853.1 L51.1 841.5 L48.4 822.3 L32.8 814.1 L44.4 802.7 L32.5 796.5 L14.8 778.6 L11.3 768.7 L20.9 762.2 L20.4 750.3 L14.2 743.7 L4.0 736.4 L8.1 730.5 L12.8 725.2 L33.5 708.4 L24.0 706.1 L30.9 683.7 L39.5 666.4 L33.6 642.2 L27.0 621.2 L10.1 606.9 L13.2 596.9 L14.1 591.6 L32.2 586.3 L31.3 578.0 L47.9 587.6 L58.8 590.3 L62.0 585.9 L93.8 579.9 L105.1 562.1 L91.1 548.8 L97.4 543.8 L114.0 529.7 L126.5 512.3 L125.4 484.2 L108.1 480.4 L88.6 462.1 L93.9 452.6 L117.5 446.6 L134.0 411.8 L150.9 381.8 L151.8 353.0 L152.8 339.6 L148.2 328.5 L126.0 320.9 L125.9 293.9 L131.6 284.9 L137.1 283.4 L149.8 259.9 L204.3 254.1 L234.4 256.2 L244.4 265.7 L245.9 268.5 L247.5 276.8 L250.7 283.3 L239.3 289.8 L248.8 300.4 L265.9 300.3 L262.1 271.7 L288.5 280.6 L288.9 290.7 L284.9 262.3 L298.5 221.1 L309.7 222.1 L328.6 230.5 L351.7 219.4 L327.9 202.5 L325.6 190.6 L335.7 181.6 L321.4 167.6 L322.8 154.6 L336.0 140.3 L325.9 148.9 L317.6 146.4 L302.5 147.8 L296.9 144.6 L299.9 134.4 L306.5 129.9 L300.2 129.7 L325.6 123.4 L342.5 109.9 L337.7 102.3 L321.5 107.7 L329.3 87.8 L324.0 83.7 L309.3 60.1 L289.4 33.1 Z M796.0 114.4 L795.4 114.8 L790.8 116.1 L793.9 108.7 L797.7 106.3 L799.5 108.0 L802.3 107.9 L801.7 108.6 L802.4 110.5 L801.1 111.5 L802.4 111.1 L800.4 112.7 L803.6 112.3 L802.8 111.2 L806.9 109.2 L802.5 107.9 L802.8 103.2 L795.0 104.5 L795.1 98.6 L792.9 97.7 L793.3 96.5 L805.5 95.5 L809.8 98.2 L809.0 101.2 L811.0 102.6 L811.7 100.9 L810.7 100.1 L811.1 97.9 L810.1 95.4 L816.2 90.0 L817.9 90.4 L816.4 95.6 L814.5 96.1 L816.5 96.7 L817.3 94.7 L818.8 94.2 L819.1 96.5 L822.8 101.6 L822.1 103.9 L822.7 106.4 L825.9 107.7 L826.8 110.3 L829.9 108.4 L832.9 108.8 L832.2 106.7 L833.8 102.3 L832.4 96.2 L826.4 95.6 L824.1 92.4 L820.8 91.6 L819.5 90.0 L819.5 87.3 L818.1 83.7 L813.4 87.6 L814.2 89.7 L804.2 94.2 L805.6 88.5 L809.1 81.3 L808.5 77.7 L802.4 81.8 L803.6 86.5 L802.6 88.9 L795.2 94.2 L795.8 91.6 L799.2 89.7 L801.9 86.0 L802.5 83.9 L801.6 79.0 L804.9 75.2 L808.9 72.7 L824.5 70.5 L825.4 72.0 L824.7 74.6 L819.9 77.1 L818.7 79.8 L820.1 86.3 L823.6 90.6 L828.1 92.2 L828.6 91.1 L846.8 89.3 L851.8 93.5 L852.1 97.3 L850.6 101.4 L843.9 105.7 L840.3 109.7 L839.8 112.4 L841.1 117.8 L844.2 123.1 L845.7 124.3 L851.1 123.9 L854.5 127.8 L856.5 132.2 L861.3 135.0 L858.1 136.4 L857.4 139.5 L855.9 140.9 L855.6 144.0 L856.8 147.7 L855.0 148.5 L852.5 146.2 L854.8 146.4 L854.2 143.6 L849.3 145.0 L848.2 143.4 L854.1 139.8 L854.5 137.8 L850.5 137.2 L844.3 139.7 L851.6 135.8 L852.2 133.5 L848.4 133.7 L844.6 137.0 L843.4 134.3 L841.0 132.9 L837.9 135.4 L832.9 134.5 L828.2 137.3 L827.3 136.1 L826.8 136.9 L828.5 138.7 L823.6 142.1 L820.7 148.1 L819.7 149.0 L819.9 146.6 L816.1 148.4 L816.9 152.5 L818.0 151.3 L816.9 150.8 L817.6 149.4 L819.0 151.4 L820.8 149.3 L823.3 151.2 L823.9 154.3 L820.6 157.5 L809.3 151.9 L809.9 151.1 L812.7 153.0 L813.0 149.1 L814.1 148.4 L814.2 146.8 L811.5 149.2 L812.7 150.7 L807.1 151.4 L802.2 148.5 L801.4 146.6 L801.2 148.1 L799.4 148.3 L799.0 145.8 L799.9 144.6 L798.8 143.3 L797.4 145.1 L792.8 146.0 L792.9 143.4 L794.5 141.9 L797.3 143.5 L797.8 142.6 L790.2 136.8 L791.6 129.4 L799.2 128.6 L801.7 130.1 L806.2 127.2 L803.5 126.2 L802.7 123.7 L803.6 122.2 L801.6 121.4 L800.7 118.4 L795.0 120.1 L794.0 118.6 L795.3 117.3 L796.0 114.4 Z M792.5 85.5 L793.7 86.0 L794.9 90.4 L794.0 91.1 L793.6 88.7 L793.3 90.1 L792.3 88.7 L792.8 87.1 L791.4 89.5 L789.7 89.5 L790.5 91.1 L789.6 92.4 L790.4 98.2 L787.7 100.1 L787.8 102.2 L786.9 101.9 L787.4 102.4 L785.7 105.2 L785.8 111.1 L784.6 113.2 L784.5 107.0 L788.3 94.6 L788.3 88.3 L792.5 85.5 Z M567.1 98.7 L578.2 101.2 L583.0 104.4 L585.0 104.0 L587.0 110.7 L589.6 113.5 L593.7 123.6 L586.2 121.8 L581.0 122.9 L580.6 121.7 L582.6 120.8 L579.8 120.3 L577.6 121.6 L578.9 123.7 L572.4 123.5 L569.8 122.2 L570.6 118.5 L569.8 115.5 L567.6 115.6 L566.4 114.2 L561.8 115.9 L564.5 118.7 L560.5 116.3 L559.9 114.6 L561.4 106.3 L563.6 101.7 L567.1 98.7 Z M271.1 65.4 L269.3 67.8 L269.2 69.6 L270.8 72.6 L271.6 77.1 L273.9 78.7 L274.3 81.3 L276.2 81.5 L274.3 82.0 L274.8 83.4 L275.9 83.0 L275.3 84.2 L271.7 84.9 L264.1 73.8 L265.5 70.9 L271.1 65.4 Z M157.6 249.8 L160.5 250.3 L152.7 253.4 L145.9 253.0 L144.2 254.3 L141.6 252.7 L141.1 254.5 L139.6 254.6 L138.2 253.2 L143.2 250.2 L154.0 251.1 L157.6 249.8 Z M97.1 269.1 L102.5 272.0 L95.9 273.4 L92.7 275.5 L96.5 278.2 L96.9 279.5 L95.8 280.5 L94.8 280.5 L94.1 278.1 L92.6 279.0 L92.8 280.2 L86.3 276.6 L85.2 274.0 L85.6 272.6 L82.8 272.9 L83.4 270.1 L87.1 271.8 L97.1 269.1 Z"
};

window.ACTON_PROJECTS = [
  { slug: 'lauta', name: 'Lauta', region: 'Bautzen district, Saxony', mw: 40, mwh: 100,
    status: 'realization', statusLabel: 'In realization', codYear: 2027,
    x: 896.6, y: 659.9,
    blurb: 'Grid-scale battery storage in Lusatia, one of Germany\u2019s former lignite heartlands now at the centre of the renewable build-out.' },
  { slug: 'plettenberg', name: 'Plettenberg', region: 'M\u00e4rkischer Kreis, North Rhine-Westphalia', mw: 30, mwh: 90,
    status: 'realization', statusLabel: 'In realization', codYear: 2027,
    x: 218.0, y: 700.0,
    blurb: 'Battery storage at a strong industrial grid node in the Sauerland region, connected via the regional high-voltage network.' },
  { slug: 'langenfeld', name: 'Langenfeld', region: 'Rhineland, North Rhine-Westphalia', mw: 350, mwh: 800,
    status: 'development', statusLabel: 'In development', codYear: null,
    x: 117.6, y: 717.4,
    blurb: 'Our largest proprietary development, located in the load centre between D\u00fcsseldorf and Cologne.' },
  { slug: 'dev-a', name: 'Undisclosed site', region: 'Site name not yet public', mw: 300, mwh: 600,
    status: 'development', statusLabel: 'In development', codYear: null,
    x: 176.6, y: 841.6,
    blurb: 'A large-scale development at an established energy site. We publish the name and details once the project reaches the appropriate stage.' },
  { slug: 'dev-b', name: 'Undisclosed site', region: 'Site name not yet public', mw: 100, mwh: 400,
    status: 'development', statusLabel: 'In development', codYear: null,
    x: 487.5, y: 534.6,
    blurb: 'A four-hour storage development pursued with a consortium partner. Details follow in due course.' },
  { slug: 'salzbergen', name: 'Salzbergen', region: 'Emsland, Lower Saxony', mw: 95, mwh: 225,
    status: 'development', statusLabel: 'In development', codYear: null,
    x: 161.3, y: 502.6,
    blurb: 'Storage in the Emsland region, where strong wind generation meets a well-developed grid.' },
  { slug: 'sonneberg', name: 'Sonneberg', region: 'Sonneberg district, Thuringia', mw: 95, mwh: 200,
    status: 'development', statusLabel: 'In development', codYear: null,
    x: 578.0, y: 846.7,
    blurb: 'Battery storage strengthening the grid along the former inner-German border corridor.' },
  { slug: 'dev-c', name: 'Undisclosed site', region: 'Site name not yet public', mw: 20, mwh: 40,
    status: 'development', statusLabel: 'In development', codYear: null,
    x: 622.7, y: 1194.9,
    blurb: 'A storage development close to a major load centre. Details follow in due course.' }
];

// Renders the Germany map into a container. opts: { mini: bool, interactive: bool }
window.actonRenderMap = function (container, opts) {
  opts = opts || {};
  var NS = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', window.ACTON_MAP.viewBox);
  svg.setAttribute('class', 'map-svg');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Map of Germany showing Acton Energy battery storage projects');

  var land = document.createElementNS(NS, 'path');
  land.setAttribute('d', window.ACTON_MAP.landPath);
  land.setAttribute('class', 'map-land');
  svg.appendChild(land);

  window.ACTON_PROJECTS.forEach(function (p) {
    if (p.x == null || p.y == null) return;
    var g = document.createElementNS(NS, 'g');
    g.setAttribute('class', 'map-marker m-' + p.status + (p.status === 'realization' ? ' pulse' : ''));
    g.setAttribute('data-slug', p.slug);
    g.setAttribute('tabindex', opts.interactive ? '0' : '-1');
    if (opts.interactive) g.setAttribute('role', 'button');
    g.setAttribute('aria-label', p.name + ', ' + p.mw + ' megawatt, ' + p.statusLabel);
    var r = Math.max(14, Math.min(30, 12 + Math.sqrt(p.mw) * 1.15));
    if (opts.mini) r *= 1.15;

    if (p.status === 'realization') {
      var halo = document.createElementNS(NS, 'circle');
      halo.setAttribute('cx', p.x); halo.setAttribute('cy', p.y); halo.setAttribute('r', r);
      halo.setAttribute('fill', 'none');
      halo.setAttribute('stroke', '#EE4D23');
      halo.setAttribute('stroke-width', '3');
      halo.setAttribute('opacity', '.5');
      halo.setAttribute('class', 'halo');
      g.appendChild(halo);
    }
    var shape = document.createElementNS(NS, 'circle');
    shape.setAttribute('cx', p.x); shape.setAttribute('cy', p.y); shape.setAttribute('r', r * 0.72);
    shape.setAttribute('class', 'shape');
    if (p.status === 'realization') {
      shape.setAttribute('fill', '#EE4D23');
    } else {
      shape.setAttribute('fill', 'rgba(168,192,212,.16)');
      shape.setAttribute('stroke', '#A8C0D4');
      shape.setAttribute('stroke-width', '4');
    }
    g.appendChild(shape);
    svg.appendChild(g);
  });

  container.appendChild(svg);
  return svg;
};
