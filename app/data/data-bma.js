'use strict';

var latitude = 39.773041;
var longitude = -74.2074317;

module.exports = {
  "bma": { 
    brand: {
      color: 'tomato',
      heroImage: 'https://images.unsplash.com/photo-1467179257860-0b3be79206f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=84ac74736ea937d1bae0eae1f09dd96b'
    },
    clinic: {
      name: "Barnegat Medical Associates",
      phone: "(609) 698-3636",
      category: "Internal Medicine",
      state: "NJ",
      city: "Barnegat",
      address: "218 Pocohontas Ave",
      zip: " 08005",
      directions: "https://www.google.com/maps/dir/''/218+Pocohontas+Ave,+Barnegat,+NJ+08005/@" + latitude + "," + longitude + ",12z/",
      latitude: latitude,
      longitude: longitude,
      schedule: {
        days: "Monday through Saturday",
        time: "9:00am &mdash; 5:00pm"
      }
    },
    about: "<p>Being the first of its kind, laskin introduces new age cosmetic wonders under the dermatologist's wand for skin procedures like acne scar &amp; stretch mark reduction, hyper-pigmentation, photo damaged skin, laser hair reduction, narrow band uvb therapy for psoriasis &amp; vitiligo, skin tightening and laser tattoo removal amongst other procedures.</p><p>Laskin also takes great pride in their new and unique approach to fat loss & body sculpting with low frequency ultrasound technology followed controlled volumetric heating with radio frequency that enables sculpting, lifting and toning of the face and body for the desired look you have always wanted.</p>",
    doctors: [
      {
        photo: "http://placehold.it/100x100",
        specialty: "Dermatologist",
        name: "Dr. Rajiv Sahay",
        desc: "MBBS , MD - Dermatology , Venereology & Leprosy, Fellowship in Cutaneous Surgeries"
      },
      {
        photo: "http://placehold.it/100x100",
        specialty: "Dermatologist",
        name: "Dr. Nishi Sahay",
        desc: "MBBS , MD - Dermatology , Venereology & Leprosy, Fellowship in Cutaneous Surgeries"
      }
    ],
    gallery: [
      "http://placehold.it/401x250",
      "http://placehold.it/400x250",
      "http://placehold.it/400x250",
      "http://placehold.it/400x250",
      "http://placehold.it/400x250",
      "http://placehold.it/400x250",
      "http://placehold.it/400x250",
      "http://placehold.it/400x250"
    ],
    services: [
      "Consultation",
      "Dermatology",
      "Laser Hair Reduction",
      "Acne &amp; Pigmentation Reductions",
      "Scars &amp; Stretch Mark Removal",
      "Face Lift &amp; Tightening",
      "Botox &amp; Fillers",
      "Colon Hydrotherapy",
      "Warts",
      "Moles &amp; Freckles Removal",
      "Medical Peels",
      "Mole Removal",
      "Dermatology",
      "Warts/Mole Removal",
      "Acne Treatment"
    ]
  },
}
