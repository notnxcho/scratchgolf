import venue1 from '../assets/venue1.jpeg'
import venue2 from '../assets/venue2.jpeg'
import venue3 from '../assets/venue3.jpeg'
import venue4 from '../assets/venue4.jpeg'
import venue5 from '../assets/venue5.jpeg'
import venue6 from '../assets/venue6.jpeg'

// Import coach images
import ashkaan1 from '../assets/coaches/ashkaan-1.png'
import ashkaan2 from '../assets/coaches/ashkaan-2.png'
import james1 from '../assets/coaches/james-1.png'
import james2 from '../assets/coaches/james-2.png'
import james3 from '../assets/coaches/james-3.png'
import titan1 from '../assets/coaches/titan-1.png'
import titan2 from '../assets/coaches/titan-2.png'
import titan3 from '../assets/coaches/titan-3.png'
import eric1 from '../assets/coaches/eric-1.png'
import eric2 from '../assets/coaches/eric-2.png'
import eric3 from '../assets/coaches/eric-3.png'
import eric4 from '../assets/coaches/eric-4.png'
import avash1 from '../assets/coaches/avash-1.png'

// Helper function to get coach images based on name
const getCoachImages = (coachName) => {
  const nameLower = coachName.toLowerCase()
  
  // Map coach names to their image arrays
  const imageMap = {
    'ashkaan hakim pga': [ashkaan1, ashkaan2],
    'james bradley morris': [james1, james2, james3],
    'titan luke luther': [titan1, titan2, titan3],
    'eric holtzclaw': [eric1, eric2, eric3, eric4],
    'avash': [avash1],
  }
  
  // Find matching coach name (case-insensitive partial match)
  const matchedKey = Object.keys(imageMap).find(key => 
    nameLower.includes(key) || key.includes(nameLower.split(' ')[0])
  )
  
  if (matchedKey && imageMap[matchedKey].length > 0) {
    return imageMap[matchedKey]
  }
  
  // Fallback to venue images if no coach images found
  return null
}

// Coach data definitions
const coachData = [
  {
    id: 1,
    name: 'ASHKAAN HAKIM PGA',
    title: 'HEAD INSTRUCTOR',
    price: '$200/Hr',
    teaches: ['Junior', 'Adults', 'Seniors'],
    levels: ['Beginners', 'Intermediates', 'Experts'],
    yearsPlaying: 18,
    lessonsGiven: 1060,
    qualification: 'PGA A Level, Tournament Player, TPI Golf Level 3',
    description: 'With over 18 years of experience and 1,060 lessons delivered, Ashkaan brings a comprehensive approach to golf instruction. As a PGA A Level professional and Tournament Player with TPI Golf Level 3 certification, he specializes in working with players at all levels, from beginners to experts.',
    fallbackImages: [venue1, venue2, venue3, venue4, venue5, venue6]
  },
  {
    id: 2,
    name: 'JAMES BRADLEY MORRIS',
    title: 'INSTRUCTOR',
    price: '$150/Hr',
    teaches: ['Junior', 'Adults', 'Seniors'],
    levels: ['Beginners', 'Intermediates', 'Experts'],
    yearsPlaying: 18,
    lessonsGiven: 560,
    qualification: 'TPI Golf Level 2 | Trackman Certified',
    description: 'James combines his 18 years of playing experience with TPI Golf Level 2 and Trackman certifications to provide data-driven instruction. Having delivered over 560 lessons, he excels at helping players of all ages and skill levels improve their game through modern technology and proven techniques.',
    fallbackImages: [venue2, venue3, venue4, venue5, venue6, venue1]
  },
  {
    id: 3,
    name: 'TITAN LUKE LUTHER',
    title: 'INSTRUCTOR',
    price: '$150/Hr',
    teaches: ['Junior', 'Adults', 'Seniors'],
    levels: ['Beginners', 'Intermediates', 'Experts'],
    yearsPlaying: 16,
    lessonsGiven: 480,
    qualification: 'TPI Golf Level 2, Tournament Player, Trackman',
    description: 'Titan brings 16 years of competitive experience as a Tournament Player to his instruction. With TPI Golf Level 2 certification and Trackman expertise, he has successfully guided over 480 students across all skill levels, helping them develop both technical skills and competitive mindset.',
    fallbackImages: [venue3, venue4, venue5, venue6, venue1, venue2]
  },
  {
    id: 4,
    name: 'ROB LORENZI',
    title: 'INSTRUCTOR',
    price: '$100/Hr',
    teaches: ['Junior', 'Adults'],
    levels: ['Beginners', 'Intermediates'],
    yearsPlaying: 12,
    lessonsGiven: 260,
    qualification: 'Trackman Certified',
    description: 'Rob specializes in working with junior and adult players who are beginning or intermediate golfers. With 12 years of playing experience and Trackman certification, he has delivered over 260 lessons focused on building solid fundamentals and helping players develop confidence in their game.',
    fallbackImages: [venue4, venue5, venue6, venue1, venue2, venue3]
  },
  {
    id: 5,
    name: 'MARTY FOSTER',
    title: 'INSTRUCTOR',
    price: '$115/Hr',
    teaches: ['Junior', 'Adults', 'Seniors'],
    levels: ['Beginners', 'Intermediates', 'Experts'],
    yearsPlaying: 30,
    lessonsGiven: 5680,
    qualification: 'PGA A Level, Tournament Player, Trackman Certified',
    description: 'Marty is one of our most experienced instructors with 30 years of playing experience and over 5,680 lessons delivered. As a PGA A Level professional, Tournament Player, and Trackman Certified instructor, he brings unparalleled expertise to players of all ages and skill levels.',
    fallbackImages: [venue5, venue6, venue1, venue2, venue3, venue4]
  },
  {
    id: 6,
    name: 'ERIC HOLTZCLAW',
    title: 'INSTRUCTOR',
    price: '$84/Hr',
    teaches: ['Juniors', 'Adults', 'Seniors'],
    levels: ['Beginners', 'Intermediates'],
    yearsPlaying: 25,
    lessonsGiven: 401,
    qualification: 'Single Handicap',
    description: 'Eric brings 25 years of playing experience as a Single Handicap player to his instruction. With over 400 lessons delivered, he specializes in working with beginners and intermediate players, helping them develop their skills and enjoy the game of golf.',
    fallbackImages: [venue6, venue1, venue2, venue3, venue4, venue5]
  }
]

// Process coaches to add images
export const coaches = coachData.map(coach => {
  const coachImages = getCoachImages(coach.name)
  const images = coachImages || coach.fallbackImages
  const mainImage = images[0]
  
  // Remove fallbackImages from the final object
  const { fallbackImages, ...coachWithoutFallback } = coach
  
  return {
    ...coachWithoutFallback,
    mainImage,
    images
  }
})

