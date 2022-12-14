import { Cd } from "../components/object/cd";
import { CdCollection } from "../components/object/cd-collection";

/**
 * *sarcasm gaaaasp* oohh my gosh! You discovered a secret little feature!
 * Well done. You deserve an explanation.
 * 
 * For christmas my family asked me what kind of things I'm interested in,
 * and the first thing I mentioned was that I'm actively collecting CDs from my favourite artists and soundtracks.
 * Only issue was, I had no list available anywhere, and "cd collection software" doesn't contain nearly
 * enough of the things I'm interested in in the long term, which would make buying one a waste.
 * 
 * "oh yeah, I have a website I haven't been able to update for over a year.",
 * and so I got to working on this.
 * 
 * It's not actually my cd collection. In programming terms "Collection", as you may know, is an iterable type over a set of data.
 * Therefore you can think of this more as a wishlist.
 * 
 * Do I care if you see this? Absolutely not! In fact, I'd be happy to know someone shows interest in my poorly outdated portfolio code.
 * Do I hope you may take interest in the works listed below? Absolutely yes!
 * 
 * In no way do I suggest you implement something like this the same way for yourself!
 * In its simplest form you should be able to construct a .CSV using a tool of your choice.
 * Then, either make this file uploadable to your server and extract data directly from there,
 * or go all-in and add a database of your choosing with which you can export and download a .CSV,
 * also making it possible to simply edit your wishlist through your own interface should you have the means to do that. :)
 */
export const cdCollection: CdCollection = new CdCollection([
    new Cd(
        "Masaru Yokoyama",
        "N no Tame ni ORIGINAL SOUNDTRACK",
        "https://vgmdb.net/album/57448",
        [
            "https://www.cdjapan.co.jp/product/UZCL-2061",
        ],
    ),
    new Cd(
        "Jun Maeda",
        "Angel Beats! ORIGINAL SOUNDTRACK",
        "https://vgmdb.net/album/19312",
        [
            "https://www.bol.com/nl/nl/p/angel-beats/9200000042510610/",
        ],
    ),
    new Cd(
        "Takatsugu Muramatsu",
        "When Marnie Was There Soundtrack Music Collection",
        "https://vgmdb.net/album/45405",
        [
            "https://www.cdjapan.co.jp/product/TKCA-74120",
        ],
    ),
    new Cd(
        "Yuji Yoshino",
        "TV Animation \"Ookami to Koushinryou\" O.S.T. Ookami to Tabi no Ongaku",
        "https://vgmdb.net/album/23022",
        [
            "https://solarisjapan.com/products/tv-animation-ookami-to-koushinryou-o-s-t-ookami-to-tabi-no-ongaku#",
        ],
    ),
    new Cd(
        "Akisai",
        "colors",
        "https://akisai.bandcamp.com/album/colors",
        [
            "https://akisai.bandcamp.com/album/colors",
        ],
    ),
    new Cd(
        "Akisai",
        "images",
        "https://akisai.bandcamp.com/album/images",
        [
            "https://akisai.bandcamp.com/album/images",
        ],
    ),
    new Cd(
        "Guitar",
        "Saltykisses",
        "https://guitarsunkissed.bandcamp.com/album/saltykisses",
        [
            "https://www.bol.com/nl/nl/p/saltykisses/1000004006394028/",
        ],
    ),
    new Cd(
        "Kenji Kawai",
        "Sayonara no Asa ni Yakusoku no Hana wo Kazarou Original Soundtrack",
        "https://vgmdb.net/album/73538",
        [
            "https://www.cdjapan.co.jp/product/LACA-15696",
            "https://www.amazon.nl/%E6%98%A0%E7%94%BB%E3%80%8E%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E3%81%AE%E6%9C%9D%E3%81%AB%E7%B4%84%E6%9D%9F%E3%81%AE%E8%8A%B1%E3%82%92%E3%81%8B%E3%81%96%E3%82%8D%E3%81%86%E3%80%8F%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF/dp/B078F9K9YK",
        ],
    ),
    new Cd(
        "Kohei Tanaka",
        "GRAVITY DAZE 2 ORIGINAL SOUNDTRACK",
        "https://vgmdb.net/album/64087",
        [
            "https://www.cdjapan.co.jp/product/KDSD-973",
            "https://www.amazon.nl/Gravity-Daze-Video-Original-Soundtrack/dp/B01MSYWQRK",
        ],
    ),
    new Cd(
        "Yuki Kajiura",
        ".hack//SIGN ORIGINAL SOUND & SONG TRACK 2",
        "https://vgmdb.net/album/5650",
        [
            "https://www.amazon.nl/Hack-Sign-Sound-Song-Track/dp/B00006HBNM",
        ],
    ),
    new Cd(
        "Evan Call",
        "VIOLET EVERGARDEN : Automemories",
        "https://vgmdb.net/album/74032",
        [
            "https://www.cdjapan.co.jp/product/LACA-9573",
        ],
    ),
    new Cd(
        "Hiroyuki Sawano",
        "EIGHTY-SIX ORIGINAL SOUNDTRACK",
        "https://vgmdb.net/album/110712",
        [
            "https://www.cdjapan.co.jp/product/SVWC-70532",
        ],
    ),
    new Cd(
        "Hiroyuki Sawano",
        "The Seven Deadly Sins Original soundtrack",
        "https://vgmdb.net/album/48448",
        [
            "https://www.cdjapan.co.jp/product/SVWC-70040",
        ],
    ),
    new Cd(
        "Hiroyuki Sawano",
        "The Seven Deadly Sins ORIGINAL SOUNDTRACK 2",
        "https://vgmdb.net/album/50415",
        [
            "https://www.cdjapan.co.jp/product/SVWC-70063",
        ],
    ),
]);