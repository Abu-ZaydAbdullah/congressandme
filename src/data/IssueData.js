import gunImage from '../assets/gun.jpg'
import fenceImage from '../assets/fence.jpg'
import medicalImage from '../assets/medical.jpg'
import natureImage from '../assets/nature.jpg'
import cancelImage from '../assets/cancel.png'

export default {
    "0" : {
      index: 0,
      name: "Abortion",
      desc: "The issue of abortion is extremely volatile in the current political climate. See how much your politician\
             values a woman's bodily autonomy.",
      about: "Abortion is the act of euthanizing a developing fetus. It can be done for many reasons, ranging from\
              medical safety to the child being conceived through violence. While generally safe, some protest it\
              because they believe the childs life should be preserved, regardless of what kind of circumstances\
              the child may be born into.",
      image: cancelImage,
      states: 34,
      rep: 8
    },
    "1" : {
      index: 2,
      name: "Environmentalism",
      desc: "Every day, the earth crawls closer to irreversible catastrophe thanks to our own actions. See what your politician\
             is doing to stop us from all burning alive here.",
      about: "Climate change is the process by which green house gasses emitted by humans are heating the Earth up and\
              changing the expected weather pattens across the globe. Global temperatures are on the rise along with sea\
              levels and pollution count as humans continue to emit carbon into the air and sea. Some people try to deny\
              that this is happening by actively disagreeing with the 97% of scientists who agree that climate change is\
              real and is caused by humans.",
      image: natureImage,
      states: 4,
      rep: 8
    },
    "2" : {
      index: 3,
      name: "Gun-Control",
      desc: "With a steady increase in mass shooting over the years, gun control has become a contentious topic. See what your politician\
             has been saying about limiting the distribution of weapons here.",
      about: "Guns are designed to do harm to other human beings. Some people argue that they need guns to protect themselves\
              while others would say that owning a gun is unecessary. Guns can do a lot of damage in a short amount of time,\
              so a big issue in the gun debate is whether the cost of hundreds of lives every year due to mass shootings\
              is worth being able to own a high powered assault weapon for personal protection. Whether you advocate for\
              gun confiscation programs or have a loose interpretation of the second ammendment the gun debate is a major\
              issue in America.",
      image: gunImage,
      states: 34,
      rep: 8
    },
    "3" : {
      index: 4,
      name: "Healthcare",
      desc: "With the cost of medical care so high, some form of insurance is absolutely necessary to survival. See what your politician\
             thinks about subsidizing a basic neccesity for the masses.",
      about: "Healthcare is as expensive as it is necessary and costs are only rising. People go bankrupt every day because they\
              can't afford to be sick or injured.",
      image: medicalImage,
      states: 44,
      rep: 8
    },
    "4" : {
      index: 5,
      name: "Immigration",
      desc: "America has a long and storied history of relying on immigrants to do much of the backbreaking labor... and despising them\
             for taking that work at the same time. See what your politican has been saying in this cycle of the fight.",
      about: "Abortion",
      image: fenceImage,
      states: 44,
      rep: 8
    }
  };
