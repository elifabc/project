import * as yup from 'yup';

export const SignUpSchemas = yup.object({
    name: yup
        .string()
        .min(3, 'Geçerli bir isim giriniz.')
        .required('Bu alanın doldurulması zorunludur.'),

    surname: yup
        .string()
        .min(3, 'Geçerli bir soyad giriniz.')
        .required('Bu alanın doldurulması zorunludur.'),

    email: yup
        .string()
        .trim()
        .email('Geçerli e-posta adresi giriniz.')
        .required('Bu alanın doldurulması zorunludur.'),

    password: yup
        .string()
        .min(8, 'Şifre en az 8 karakter olmalıdır.')
        .required('Bu alanın doldurulması zorunludur.'),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Şifreler eşleşmiyor')
        .required('Bu alanın doldurulması zorunludur.'),

    term: yup
        .boolean()
        .oneOf([true], 'Lütfen kutucuğu onaylayınız.'),

});
