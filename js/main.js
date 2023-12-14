var ayaat =[
    {ayah: "﴾ فَمَا ظَنُّكُم بِرَبِّ ٱلۡعَٰلَمِينَ ﴿" , translation: "Then what is your thought about the Lord of the worlds?" , surah : "As-Saffat" , number : "87"  },
    {ayah: "﴾ وَاستَعينوا بِالصَّبرِ وَالصَّلاةِ وَإِنَّها لَكَبيرَةٌ إِلّا عَلَى الخاشِعينَ ﴿" , translation: "And seek help through patience and prayer; and indeed, it is difficult except for the humbly submissive" , surah : "Al-Baqarah" , number : "45"  },
    {ayah: "﴾ الأَخِلّاءُ يَومَئِذٍ بَعضُهُم لِبَعضٍ عَدُوٌّ إِلَّا المُتَّقينَ ﴿" , translation: "Close friends, that Day, will be enemies to each other, except for the righteous" , surah : "Az-Zukhruf" , number : "67"  },
    {ayah: "﴾ وَوَجَدَكَ ضالًّا فَهَدى ﴿" , translation: "And He found you lost and guided you" , surah : "Ad-Duha" , number : "7"  },
    {ayah: "﴾ وَأَن لَيسَ لِلإِنسانِ إِلّا ما سَعى ﴿" , translation: " And that there is not for man except that [good] for which he strives" , surah : "An-Najm" , number : "39"  },
    {ayah: "﴾ قاتِلوهُم يُعَذِّبهُمُ اللَّهُ بِأَيديكُم وَيُخزِهِم وَيَنصُركُم عَلَيهِم وَيَشفِ صُدورَ قَومٍ مُؤمِنينَ ﴿" , translation: "Fight them; Allāh will punish them by your hands and will disgrace them and give you victory over them and satisfy the breasts [i.e., desires] of a believing people" , surah : "At-Tawbah" , number : "14"  },
    {ayah: "﴾ وَاستَغفِروا رَبَّكُم ثُمَّ توبوا إِلَيهِ إِنَّ رَبّي رَحيمٌ وَدودٌ ﴿" , translation: "And ask forgiveness of your Lord and then repent to Him. Indeed, my Lord is Merciful and Affectionate" , surah : "Hud" , number : "90"  },
    {ayah: "﴾ قالَ إِنَّما أَشكو بَثّي وَحُزني إِلَى اللَّهِ وَأَعلَمُ مِنَ اللَّهِ ما لا تَعلَمونَ ﴿" , translation: 'He said, "I only complain of my suffering and my grief to Allāh, and I know from Allāh that which you do not know." ', surah : "Yusuf" , number : "86"  },
    {ayah: "﴾ وَلا تَقولَنَّ لِشَيءٍ إِنّي فاعِلٌ ذلِكَ غَدًا ❁ إِلّا أَن يَشاءَ اللَّهُ وَاذكُر رَبَّكَ إِذا نَسيتَ وَقُل عَسى أَن يَهدِيَنِ رَبّي لِأَقرَبَ مِن هذا رَشَدًا ﴿" , translation: ' And never say of anything, "Indeed, I will do that tomorrow," Except [when adding], "If Allāh wills." And remember your Lord when you forget [it] and say, "Perhaps my Lord will guide me to what is nearer than this to right conduct."' , surah : "Al-Kahf" , number : "24 & 25"  },
    {ayah: "﴾ وَلا تُخزِني يَومَ يُبعَثونَ ﴿" , translation: 'And do not disgrace me on the Day they are [all] resurrected ' , surah : "Ash-Shu'ara'" , number : "87"  },
    {ayah: "﴾ قالَ رَبِّ اغفِر لي وَهَب لي مُلكًا لا يَنبَغي لِأَحَدٍ مِن بَعدي إِنَّكَ أَنتَ الوَهّابُ ﴿" , translation: 'He said, "My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me. Indeed, You are the Bestower."' , surah : "Sad" , number : "35"  },
    {ayah: "﴾ وَسيقَ الَّذينَ اتَّقَوا رَبَّهُم إِلَى الجَنَّةِ زُمَرًا حَتّى إِذا جاءوها وَفُتِحَت أَبوابُها وَقالَ لَهُم خَزَنَتُها سَلامٌ عَلَيكُم طِبتُم فَادخُلوها خالِدينَ ﴿" , translation: 'But those who feared their Lord will be driven to Paradise in groups until, when they reach it while its gates have been opened and its keepers say, "Peace be upon you,  you have become pure so enter it to abide eternally therein,"' , surah : "Az-Zumar" , number : "73"  },
    {ayah: "﴾ وَفِي السَّماءِ رِزقُكُم وَما توعَدونَ ﴿" , translation: 'And in the heaven is your provision and whatever you are promised.' , surah : "Ad-Dharriyat" , number : "22"  },
]

var lastGeneratedIndex = -1;

function show() {
    var index = Math.floor(Math.random() * ayaat.length);

    while (index === lastGeneratedIndex) {
        index = Math.floor(Math.random() * ayaat.length);
    }
    // 
    // 
    lastGeneratedIndex = index;
    document.getElementById("ayah").innerHTML =  ayaat[index].ayah;
    document.getElementById("transltion").innerHTML = ayaat[index].translation;
    document.getElementById("surah-name").innerHTML = ayaat[index].surah;
    document.getElementById("ayah-number").innerHTML = ayaat[index].number;
    console.log(index);
}
