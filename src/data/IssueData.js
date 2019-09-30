import gunImage from '../assets/gun.jpg'
import fenceImage from '../assets/fence.jpg'
import medicalImage from '../assets/medical.jpg'
import natureImage from '../assets/nature.jpg'
import cancelImage from '../assets/cancel.png'

export default [
    {
      index: 0,
      name: "Abortion",
      desc: "The issue of abortion is extremely volatile in the current political climate. See whether your politician believes in a woman's right to her own body\
             or if they believe every developing life must be prioritized, regardless of cost.",
      image: cancelImage
    },
    {
      index: 2,
      name: "Environmentalism",
      desc: "Every day, the earth crawls closer to irreversible catastrophe thanks to our own actions. See what your politician\
             is doing to stop us from all burning alive here.",
      image: natureImage 
    },
    {
      index: 3,
      name: "Gun Control",
      desc: "With a steady increase in mass shooting over the years, gun control has become a contentious topic. See what your politician\
             has been saying about limiting the distribution of weapons here.",
      image: gunImage
    },
    {
      index: 4,
      name: "Government Healthcare",
      desc: "With the cost of medical care so high, some form of insurance is absolutely necessary to survival. See what your politician\
             thinks about subsidizing a basic neccesity for the masses.",
      image: medicalImage
    },
    {
      index: 5,
      name: "Immigration",
      desc: "America has a long and storied history of relying on immigrants to do much of the backbreaking labor... and despising them\
             for taking that work at the same time. See what your politican has been saying in this cycle of the fight.",
      image: fenceImage
    }
];
