 const request = require('supertest')

it('',async() =>{
    // https://swapi.dev/api
    // /people/1

    const resposta = await request('https://swapi.dev/api').get('/people/1');


    //console.log(resposta.status);
    //console.log(resposta.body);
    //console.log(`Status: ${resposta.status}`);
});


test('Deve visualizar informações de cadastro, quando buscar uma pessoa existente',async()=>{
    const resposta = await request('https://swapi.dev/api').get('/people/1');
    expect(resposta.status).toBe(200);
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    expect(resposta.body.name).toBe('Luke Skywalker');
});


test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async()=>{
    const resposta = await request('https://swapi.dev/api').get('/people/9999');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
       
});


/* it('1+1 deve ser igual a 2',()=>{
    const resultadoEsperado = 3;
    expect(1+1).toBe(resultadoEsperado);
}); */



it('',async() =>{ 
  // https://swapi.dev/api
    // starships/10

    const resposta = await request('https://swapi.dev/api').get('/starships/10/');
    

    //console.log(resposta.status);
    //console.log(resposta.body);
    //console.log(`Status: ${resposta.status}`);
});


test('Deve visualizar informações de cadastro, quando buscar uma nave existente',async()=>{ 

    const resposta = await request('https://swapi.dev/api').get('/starships/10/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.films).toBeDefined();
    expect(Number(resposta.body.cost_in_credits)).toBeGreaterThan(0);
    expect(resposta.body.name).toBe('Millennium Falcon');
});


test('Deve receber uma mensagem de erro, quando buscar por uma nave inexistente', async()=>{ 


    const resposta = await request('https://swapi.dev/api').get('/starships/9999/');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });

    });



    

it('', async() => {
 // https://swapi.dev/api
    // /people/3/

    const resposta = await request('https://swapi.dev/api').get('/people/3');


    //console.log(resposta.status);
    //console.log(resposta.body);
    //console.log(`Status: ${resposta.status}`);
});

test('Deve visualizar informações de cadastro, quando buscar uma pessoa existente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/people/3');
    expect(resposta.status).toBe(200);
    expect(resposta.body.films).toBeDefined();
    expect(Number(resposta.body.mass)).toBeGreaterThan(0);
    expect(resposta.body.name).toBe('R2-D2');
});

test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
       
});



it('', async() => {


const resposta = await request('https://swapi.dev/api').get('/planets/8/');
});

test('Deve visualizar informações de cadastro, quando buscar um planeta existente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/planets/8/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.films).toBeDefined();
    expect(Number(resposta.body.population)).toBeGreaterThan(0);
    expect(resposta.body.name).toBe('Naboo');

});

test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999/');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});


/*
it4('', async() => {

});

test4('Deve visualizar informações de cadastro, quando buscar uma pessoa existente', async() => {

});

test4('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {

});

it5('', async() => {

});

test5('Deve visualizar informações de cadastro, quando buscar uma pessoa existente', async() => {

});

test5('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {

});

it6('', async() => {

});

test6('Deve visualizar informações de cadastro, quando buscar uma pessoa existente', async() => {

});

test6('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {

});

it7('', async() => {

});

test7('Deve visualizar informações de cadastro, quando buscar uma pessoa existente', async() => {

});

test7('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {

});

it8('', async() => {

});

test8('Deve visualizar informações de cadastro, quando buscar uma pessoa existente', async() => {

});

test8('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {

});

it9('', async() => {

});

test9('Deve visualizar informações de cadastro, quando buscar uma pessoa existente', async() => {

});

test9('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {

});

it10('', async() => {

});

test10('Deve visualizar informações de cadastro, quando buscar uma pessoa existente', async() => {

});

test10('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {

});
 */