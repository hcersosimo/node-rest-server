//======================================
//  Puerto
//======================================
process.env.PORT = process.env.PORT || 3000;

//======================================
//  Entorno
//======================================

process.env.NODE_ENV = process.env.NODE_ENV || 'desa';

//======================================
//  Base de Datos
//======================================

let urlDB;

if (process.env.NODE_ENV === 'desa') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cafeUser:oduXBFaLns0i4FKQ@cluster0.cnjz6.mongodb.net/cafe?retryWrites=true&w=majority';
}

process.env.urlDB = urlDB;