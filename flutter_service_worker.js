'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f6f860449b862d6e915e2e2b4a2024b8",
".git/config": "4d57e419f4bb0aa41f84f70480bf02d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b2b9ca8d01aa0d0055a3caf9703fc43d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dd19ecb3dce7408cee8cbe612ce088d4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c49efbaef968b60ca8ade8d91fae6076",
".git/logs/refs/heads/main": "b2093089003619243eb96337951b82af",
".git/logs/refs/remotes/origin/main": "03b0bbbe2d89dd592c0fc8606462f9b2",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e7744af9650a8e73427bf8ccd0391f522284fa": "6b41c0abfbf177576b81e7589ab4793b",
".git/objects/0c/9cf5f9711d491c291d4cd9a21303fac381e3b0": "ffdb04b868cf92110364774cfffb2658",
".git/objects/0e/9f983524e32738c4a56f8b229c74b606e32467": "937fa4e1eed81b73a2550478a149d681",
".git/objects/10/e59ff9869b94671d0ffaaa9e5b21896afe60d1": "a2ae31480b5a5a7292187a20497692a3",
".git/objects/11/20c0932104eadc5cda62e392860bb302e31116": "69393efa7f911471b27dd4685d42a549",
".git/objects/11/663d82053ef4555c3cb579fcc90dfa5370b592": "9a927b4c4e559367702023084e3d4606",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/22/1714dd347682bd67bc08b66e3b84e1a2815c29": "5797b635ff92943cadd04011f7e9bf99",
".git/objects/22/e14989837591f5770dd5a3c54476e51b36ee0b": "438890fefe490d6ded6a4346d713e81c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/711383aaca5a2395111905710fc2604e18153d": "a69c8a13d307b2361620ee7364a66fbc",
".git/objects/23/e8f4d70d8cc8d6da8547c90c49344413a747ce": "4b9878588e179ccb586db82b1739423e",
".git/objects/26/624ad3bf76b9daf6ad3fc5ca0861d4b11ab6fd": "d8fcc1dd49ae78fbf83648097899c8cd",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/26/ccc6c3827323520ef3c18e623183e30eeb139e": "639fd837ea1c200f22841210944c9120",
".git/objects/27/8ceaa36bad2675e77e002b95238e3148a19d86": "ea0e1ac38ffae0b4c5e8ce97deb6e955",
".git/objects/2a/1dc291142e8c8c440627a4c21723197385703a": "839d5b163c02599d38cc398ff967aa63",
".git/objects/2b/66261923ba13873389ee3612fe629583e7ae31": "f290b17fdec30481fe24d0c489a2f6c3",
".git/objects/2f/1e6813c4f8d9db2d94ae900a68dfa1fdb3d7cb": "d0a4ce857992e5f2e0ad8aa32831070f",
".git/objects/2f/fa8d9c9498b779b7ad08f2c37e0e13b1a89c02": "5a57d54183c74ad4a7702f86141a42ad",
".git/objects/31/45005bbcd745e1e1bb7db64de8827d7d9a5138": "853bf2ffcf381cb59420bc94d17da780",
".git/objects/33/c61bd928b8617429384d4213d419795655fac4": "1f7c04fbc4b118765905d256d381f546",
".git/objects/35/d283c2c322e2c2070e3edc9d742f6faffd9051": "b39f570fc6368dc8e9765d4105bed6dd",
".git/objects/3c/4029b2afc3885ee56c7bbbf341158934bbe8cb": "b2332908f26b7205f3b3a43c82406bde",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/8c0977cb9a70f8157bc162577bd3578bbbbd1c": "5774010dece5b205c58117cbc4ce3a65",
".git/objects/44/c70ef8f155a4510a80ef5d6a69e63df7e45e6c": "87228a9ff21e96165ce14683836ac855",
".git/objects/45/7392936fdc543b325e0173e9fa1acb3946efc4": "f2018faac3e87a2c9df3b48b2fa7df9d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/f4f8e669bef1e5bbb08eae1de646430902137a": "a509236896c30fc33738ec5ca342d44c",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/53/fd3b35a486bba8a07c874d2aab169ac0577cb2": "748e00105b40152be139eb1238c5720f",
".git/objects/59/40bb326f62288b359c3df9498b4bcbc89cf1bc": "f7228e1c5a382662b42d85e464247ab4",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5e/759d0c2c546b6821159ccb12f59f492d979241": "6624fd40cff3e1b35a71ef6bad92006c",
".git/objects/5f/53026d0d605ee91d0ba1ee28d986645b025599": "55be7982b423102e7a5df60662822384",
".git/objects/63/b8754d24ae3c20b3340a5a61d374c5df6b8d80": "fb0983d8698c78480a88f8dd2cc17efc",
".git/objects/63/ca701b6e970e61067223307d83afce23d5b98e": "58ca1f858f2386aedd67544755007324",
".git/objects/65/5de51b9e20f7d82221bc2efec54fbbce06d11c": "c4d2fd3171f15c53763e3ae793aa562b",
".git/objects/67/bd273310f0bfe528ca6e0d7ea328a4d8ae89a9": "8090b19b2a30543b69f66379d8c61509",
".git/objects/67/f128dd701f9b78c96422ae9ff63f66ee4b3eeb": "bf909e425bc80b9c0cf1d5344ec2472e",
".git/objects/6f/9e86afbb0f078823639c0b118f923afc3bcbb3": "55cdcecf4d8020de16b56253ec98c0e6",
".git/objects/75/da8e905c399a917526f8ff5a5da6cf94d33271": "af3b773e471f1a742948736f13611667",
".git/objects/78/5ccaf1e00b805f05490bff734e11ae1c5f22d9": "6c441739cb391912c0442fa742ed6ea5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/5f31046fb8195aecae6cba2ad4e6fd4ca0969c": "7048f15777449fc23d858c7321bf6cff",
".git/objects/7e/a93248151338b6584b5c0479bd26994cab84bd": "77d266324bcbf97b90bc4fc0eca44fe3",
".git/objects/86/ab05c7ce9c82cc0736201fdaae3f7622cad52c": "e8c1c6024d001ae21d73e858f599007f",
".git/objects/87/7347d49cbb5a581b229d40a09359a1a3e2bd67": "dd5e3ec05d554d74a1e9c5eb3722812e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e9121bc1968be977df3cc38b226cb9d306bd17": "b50734c3bc2662369474f0119dbf959b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/cf99f8a48ab095d0b55d8fad1cb9b47493413e": "662ab72cc445278724706aeb5115566d",
".git/objects/8c/0e1b1810e2e22efd75fa43d444600ffe67f1ad": "91b4638bd322754cfe853a7f42579032",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/cf9a54658779e9e91923939e33412f0705b080": "ee611dd767323a350af61b6840b3edc7",
".git/objects/8f/04186e045796c9929320ac6b6ca00bf5582da4": "2225e68d5e195f04de3e3f31fb47905c",
".git/objects/94/16d3ffed67be4bef0dd4afbb6d7b72256bc1e8": "d2820aca19cd96d8fd6a02941e9c1d75",
".git/objects/95/9494f526606d065659f2654001e4f75f157bc0": "d548a243d6345e9f2cdca62c3889a9d0",
".git/objects/9a/96f9f44733b88d8c2ba4882c18857ee287d932": "779aff3b3d27e9db5a3f6c0b8b777675",
".git/objects/9f/976f9b11c0dbeedb86fcdff15baafe46d37bbf": "2b2a779371c7ef35a4b4e9d0201d4993",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8b1c38aff3a6db96c0af8e861ed832b797e759": "1a843b96a7b0361000eff2b549bbce48",
".git/objects/a3/0c6951348c216ef2bfb6996ef6ff29d6350bed": "8dd83be9e717dc33c1fa95f78d0f9d32",
".git/objects/a5/7ab2427534ec8603165118a49409887ea05175": "4df3a961979b27c6753bf293ba579156",
".git/objects/a7/78655874ac9554e60224cc387ce233c8494d62": "65ba42012aeff44a76824cd1818fd716",
".git/objects/aa/e05dedea462fdba2ba998135d5f986b295faf8": "a0f53d6f4fd10ce85c4b21d8960ca11c",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/3603ddd4286d85f956052fc1d38177937e8700": "b3150f68dded04cbfbfd2cbd939c4633",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/022b8f0e306cfd859ce5e94d0fd2f9c31507c9": "fa472b7a6b6adcd8642fc1b6620f47d9",
".git/objects/b3/e17d5658c6ba8d7a1b73fb39b24b171ff08818": "0883d13d87054eefd32c6fd37b3dc286",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/04e721ffc16170e5e58e075a7c5b11bd0b5d58": "457a2495bdd1357bccd05245700f0c85",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f7fd73202913c8d203ca19bf8aaab7d8e53e2b": "3e37ac9ac5009dbfeed35ed2a0923513",
".git/objects/ba/068696e382a0cfdb2019bef6534885741faf47": "aa0c2abbf5cc5f9d722a3e996ac08856",
".git/objects/bc/bd285af0f6af381b576528ac3f0e16a32c95af": "3322e3075b8c5b4cbff2acea474c72cd",
".git/objects/bd/d61822d973bdcfb68f554ad07b8749ac2c55d0": "69ce663d257b1af54e6b6255854d603a",
".git/objects/be/d7c532c49394657bd90c960be4ec042da343ec": "339c1481de0351f503b05cea275e983a",
".git/objects/be/f0e79d3eaf94808d8017e9eb6d2e72c73e17f1": "b8cc8b1ac4ce49cdde91a64e19ada949",
".git/objects/c1/751d3123783be846ea2a27bd72eecb3585fedd": "2c7609a8cba254fa97770b50a7df6be4",
".git/objects/c9/d540fac1097212c74d4e329665b1036bc18ef5": "9230c61ef7b189ec1d70559d5c7266b6",
".git/objects/cc/73944ac4c2007ee8ca88ec272b41c4cec02980": "1f81621d5d800555d8db90222d82a987",
".git/objects/cc/c4239ca4891dd3e60321897d0537401e65ae6a": "1af30fcbc965336d97a72d741248a184",
".git/objects/d0/4e59c284aa80fe6b2051b1e65ac15f22243fa3": "7d8da0aa722c777c970d608767ad4ad1",
".git/objects/d0/8dec19ef439eb2042733cd2fa2136f274004fb": "253ca92ef147cc0173ddd74109deaf41",
".git/objects/d2/18b347dfc54a9d62cbbb2b3ac839f2c51e9ec7": "c2f0c1a917201da822e3663f170bbee6",
".git/objects/d5/a6da50cfe8d9673638272e815badcc95fe4850": "c212e3664e1000c90eaca6faea6d1647",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/67267dfb959bac6be577cd9e58f5aeb9d3a569": "0738403d2616528b838dce6429b3b842",
".git/objects/dc/d98c9f8becfbff2c82b24d81db7dee79543676": "856425a3ebfcd29ea3d30cc2e63a3f5a",
".git/objects/df/c4c0ce914c7db0a76ab84cd8dd0720130d7141": "37b417135f5f972bb07a82c56154eb30",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e2/91d597186acce7049b64028ef71f79e5665b09": "aac4b10a9893cc3056f4cd2499c183d8",
".git/objects/e4/72b30370d0ea5fd7a668371330b67737b0343d": "77084f01c207d08873bf1213585c8241",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/2ded047e834b39108dbd791f0aec84df7754a7": "4154decd3c9998028833de7571e1df87",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/993a41de19dba23fb9b5abe43e474f6b56adf7": "dcb46dab3b2cd7a56ae7a61659991dcc",
".git/objects/e8/4ec0ea89cc9741b1a3bf0523dc5744845ba0c0": "c8a9349d8804a2550ecfbe4841e2c681",
".git/objects/e8/cf8d2938af9489907601a3a9dd286f16772d1a": "871cabbdcb58bc70348df97df0377873",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4e3c772844d4a03a74e67bb668d34abb37b64d": "329ff06515d075a3dff77b370024928b",
".git/objects/f2/6be79792d04a6dff6a5f5bd6fdfb6388d3e297": "72b256e2ee42b6eaa2ce6194e7925f86",
".git/objects/f3/130b7b768a71ce6b92d5b266fe05b014d56894": "2525140bc15f9402e5de94c5e5d61491",
".git/objects/f4/5895576055fb9178d7a5d41fa8898a381fb35e": "5d387e426b265aac2b4235cd010c30f8",
".git/objects/f4/922f8cee5d75ec05e74f99236172aa9ded031b": "dcc7237b335091847e61c433a37d0744",
".git/objects/f7/da1f72e087f48fa439cdd53ac3e730d2642831": "368bb6fb6dc2c6511b8e3a310f2657e6",
".git/objects/f8/28aac82ed55401a6eda4438b590d1c5ab9788d": "901a2959a5996c179317d166e766e199",
".git/objects/fb/728283d394ca2f89f7dcd303aa28caf964b7a1": "59066a6d0130dfee474192b6d05e32e7",
".git/objects/fc/227bd536aec8c2a77e502d71ef220ce7b8e0ed": "8c3b99cd382e4b9716548ddc63993a91",
".git/refs/heads/main": "631fa43c63389152e1f375b577bac8cb",
".git/refs/remotes/origin/main": "631fa43c63389152e1f375b577bac8cb",
"assets/AssetManifest.bin": "c31c832b9e601d2f5c18b63fe48148cb",
"assets/AssetManifest.json": "5be4d43c450c2e6179019f54928d8029",
"assets/assets/avatars/Avatar%25201.jpg": "60f969aae689291e30cffc6deafd1ec2",
"assets/assets/avatars/Avatar%25202.jpg": "9eecb4a8f2da90198bf8c4f8c3e8c527",
"assets/assets/avatars/Avatar%25203.jpg": "4431bc261ac4f57a09dc1e041b32b4d1",
"assets/assets/avatars/Avatar%25204.jpg": "95617f142e8dcfa6547ea80557eee016",
"assets/assets/avatars/Avatar%25205.jpg": "405a74c93f4806312fcd25e7722d9f90",
"assets/assets/avatars/Avatar%25206.jpg": "57b1f154ef47c7a76a78544e9e6af44f",
"assets/assets/avatars/Avatar%2520Default.jpg": "fe9d7eaf1b437a1e6c84f1e6fdb77dcf",
"assets/assets/Backgrounds/Spline.png": "ff232f0cf3ebd732ca4383c381450714",
"assets/assets/Fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/assets/Fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/assets/Fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/images/header.png": "0e61926baf3b1bcbab6791503df94d66",
"assets/assets/images/skill_background.jpg": "3e5ba7b7bef59fdaa5f0b21af75881e2",
"assets/assets/Rive/button.riv": "c8ffe2900d31d8236247928cd7c2b5f3",
"assets/assets/Rive/check.riv": "14f9269423eabd7e2e10cafdc6ad4d41",
"assets/assets/Rive/confetti.riv": "ad0d13cbea799085305316f0e8118274",
"assets/assets/Rive/house.riv": "3ac77437a4c56b5143d6ceca83dd61d9",
"assets/assets/Rive/icons.riv": "3d29f9acebef13f01f371b59e84e664b",
"assets/assets/Rive/menu_button.riv": "f8fdfd9fd8dc7873dfac6f005f3233c1",
"assets/assets/Rive/shapes.riv": "8839d67714d5e9c52b3e0dbb2b1e89c1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "ee79b6c5f0c9de3f3974fa44c968d732",
"assets/NOTICES": "7c58ef75997627fbf77669b1ca1efddf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0694916c8bb69ac850e24da716a6eb48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "99d45f98c5ac98517eb5cba57d3fabc0",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/canvaskit.wasm": "236ae09e794721c0304bc4a6c190309f",
"Faiz%20Saiyad's%20Resume%20-%20Flutter.pdf": "82e2852068b0288313e7e30c3ab77754",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "96a3160c1f5da4115c4cbff20f7ba741",
"/": "96a3160c1f5da4115c4cbff20f7ba741",
"main.dart.js": "656151335a41f31254df1e8ce06c1079",
"manifest.json": "a2ad0cae3b0210961d701c011e443c7c",
"version.json": "5fc10240b73452c6a64964c44206397c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
