import cafeGrano from '../assets/cafe_grano.png';
import cafeGranoSmall from '../assets/cafe_grano_small.png';
import maquinaCafe from '../assets/maquina_cafe.png';
import maquinaCafeSmall from '../assets/maquina_cafe_small.png';
import cafeBolsa from '../assets/cafe_bolsa.png';
import cafeBolsaSmall from '../assets/cafe_bolsa_small.png';
import cafeCapsula from '../assets/cafe_capsula.jpg';
import cafeCapsulaSmall from '../assets/cafe_capsula_small.png';

const products = [
    {
        id: 0,
        title: 'Cafe Arabica',
        package: 'Bolsa 1kg',
        price: 420,
        pictureUrl: cafeGrano,
        smallPictureUrl:cafeGranoSmall,
        stock: 7,
        description: 'Café en granos con un 0,8% y un 1,4% de cafeína, sutil, delicado y elegante con un gran equilibrio entre sabor y cuerpo.',
        type: 'grano',
        country: 'Colombia',
        category: 'cafes'
    },
    {
        id: 1,
        title: 'Cafe Robusta',
        package: 'Bolsa 2kg',
        price: 800,
        pictureUrl: cafeBolsa,
        smallPictureUrl:cafeBolsaSmall,
        stock: 5,
        description: 'Café en granos con un 4% de cafeína, mas fuerte en sabor y cuerpo.',
        type: 'grano',
        country: 'Brasil',
        category: 'cafes'
    },
    {
        id: 2,
        title: 'Cafe Arabica',
        package: 'Bolsa 3kg',
        price: 1220,
        pictureUrl: cafeBolsa,
        smallPictureUrl:cafeBolsaSmall,
        stock: 4,
        description: 'Café en granos con un 0,8% y un 1,4% de cafeína, sutil, delicado y elegante con un gran equilibrio entre sabor y cuerpo.',
        type: 'grano',
        country: 'Guatemala',
        category: 'cafes'
    },
    {
        id: 3,
        title: 'Cafe Arabica',
        package: 'Caja 10 Capsulas',
        price: 1020,
        pictureUrl: cafeCapsula,
        smallPictureUrl:cafeCapsulaSmall,
        stock: 4,
        description: 'Café en capsulas con un 0,8% y un 1,4% de cafeína, sutil, delicado y elegante con un gran equilibrio entre sabor y cuerpo.',
        type: 'capsulas',
        country: 'Colombia',
        category: 'cafes'
    },
    {
        id: 4,
        title: 'Cafe Robusta',
        package: 'Caja 10 Capsulas',
        price: 800,
        pictureUrl: cafeCapsula,
        smallPictureUrl:cafeCapsulaSmall,
        stock: 15,
        description: 'Café en capsulas con un 4% de cafeína, mas fuerte en sabor y cuerpo.',
        type: 'capsulas',
        country: 'Colombia',
        category: 'cafes'
    },
    {
        id: 5,
        title: 'Cafe Arabica',
        package: 'Caja 20 Capsulas',
        price: 1450,
        pictureUrl: cafeCapsula,
        smallPictureUrl:cafeCapsulaSmall,
        stock: 17,
        description: 'Café con un 0,8% y un 1,4% de cafeína, sutil, delicado y elegante con un gran equilibrio entre sabor y cuerpo.',
        type: 'capsulas',
        country: 'Etiopia',
        category: 'cafes'
    },
    {
        id: 6,
        title: 'Cafetera Blanca',
        package: 'Cafetera',
        price: 22200,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 8,
        description: 'Cafetera para moler cafe en grano',
        type: 'cafetera',
        country: 'Alemania',
        category: 'maquinas'
    },
    {
        id: 7,
        title: 'Cafetera Negra',
        package: 'Cafetera',
        price: 22200,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 4,
        description: 'Cafetera para moler cafe en grano',
        type: 'cafetera',
        country: 'Alemania',
        category: 'maquinas'
    },
    {
        id: 8,
        title: 'Cafetera Roja',
        package: 'Cafetera',
        price: 22200,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 4,
        description: 'Cafetera para moler cafe en grano',
        type: 'cafetera',
        country: 'EEUU',
        category: 'maquinas'
    },
    {
        id: 9,
        title: 'Cafetera Blanca con Espumador',
        package: 'Cafetera',
        price: 24850,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 6,
        description: 'Cafetera para moler cafe en grano con espumador',
        type: 'cafetera',
        country: 'España',
        category: 'maquinas'
    },
    {
        id: 10,
        title: 'Cafetera Negra con Espumador',
        package: 'Cafetera',
        price: 24850,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 4,
        description: 'Cafetera para moler cafe en grano con espumador',
        type: 'cafetera',
        country: 'Alemania',
        category: 'maquinas'
    },
    {
        id: 11,
        title: 'Cafetera Roja con Espumador',
        package: 'Cafetera',
        price: 24850,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 10,
        description: 'Cafetera para moler cafe en grano con espumador',
        type: 'cafetera',
        country: 'Alemania',
        category: 'maquinas'
    }
]

export default products;