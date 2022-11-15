import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    age: 'Age',
                    firstname: 'First Name',
                    lastname: 'Last Name',
                    comment: 'Comment',
                    country: 'Country',
                    star_one: 'Star',
                    star_other: 'Stars',
                    reviewmaker: 'Review Maker',
                    reviews: 'Reviews',
                    rating: 'Rating',
                    reviewform:'Review Form',
                    instruction: 'A random user is generated after each upload, but you can Click here to change it before upload.',
                    uploadreview :'Upload Review',
                }
            },
            fr: {
                translation: {
                    age: 'Âge',
                    firstname: 'Prénom',
                    lastname: 'Nom',
                    comment: 'Commentaire',
                    country: 'Pays',
                    star_one: 'Étoile',
                    star_other: 'Étoiles',
                    reviewmaker: 'Générateur de Commentaires',
                    reviews: 'Commentaires',
                    rating: 'Évaluation',
                    reviewform:'Formulaire',
                    instruction: 'Un utilisateur aléatoire est généré après chaque envoi, mais vous pouvez cliquer ici pour le modifier avant de l\'envoyer vers le serveur.',
                    uploadreview :'Valider le commentaire',
                }
            },
            ar: {
                translation: {
                    age:'السن',
                    firstname: 'الإسم',
                    lastname: 'النسب',
                    comment: 'التعليق',
                    country: 'البلد',
                    star_one: 'نجمة',
                    star_other: 'نجمات',
                    reviewmaker: 'صانع التعليقات',
                    reviews: 'التعليقات',
                    rating: 'تقييم',
                    reviewform:' إستمارة التعليقات',
                    instruction: 'يتم إنشاء مستخدم عشوائي بعد كل تحميل ، ولكن يمكنك النقر هنا لتغييره قبل التحميل.',
                    uploadreview :'تحميل التعليق',
                }
            }
        }
})
