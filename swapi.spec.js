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

test('Deve receber uma mensagem de erro, quando buscar por um planeta inexistente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999/');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});



it('', async() => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/30/');
});

test('Deve visualizar informações de cadastro, quando buscar um veiculo existente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/30/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.films).toBeDefined();
    expect(Number(resposta.body.cost_in_credits)).toBeGreaterThan(0);
    expect(resposta.body.name).toBe('Imperial Speeder Bike');


});

test('Deve receber uma mensagem de erro, quando buscar por um veiculo inexistente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/9999/');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});



it('', async() => {
    //films/3/
    const resposta = await request('https://swapi.dev/api').get('/films/3/');
});

test('Deve visualizar informações de cadastro, quando buscar um filme existente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/films/3/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.characters).toBeDefined();
    expect(resposta.body.planets).toBeDefined();
    expect(resposta.body.starships).toBeDefined();
    expect(resposta.body.vehicles).toBeDefined();
    expect(resposta.body.species).toBeDefined();

    expect(resposta.body.title).toBe('Return of the Jedi');
});

test('Deve receber uma mensagem de erro, quando buscar por um filme inexistente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/films/9999/');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});

it('', async() => {
    const resposta = await request('https://swapi.dev/api').get('/people/4/');
});

test('Deve visualizar informações de cadastro, quando buscar uma pessoa existente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/people/4/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.starships).toBeDefined();
    expect(resposta.body.films).toBeDefined();
    expect(Number(resposta.body.mass)).toBeGreaterThan(0);
    expect(Number(resposta.body.height)).toBeGreaterThan(0);
    expect(resposta.body.gender).toBe("male");

    expect(resposta.body.name).toBe('Darth Vader');
});

test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999/');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});
 

it('', async() => {
    const resposta = await request('https://swapi.dev/api').get('/starships/3/');
});

test('Deve visualizar informações de cadastro, quando buscar uma nave existente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/starships/3/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.films).toBeDefined();
    expect(Number(resposta.body.cost_in_credits)).toBeGreaterThan(0);
    expect(Number(resposta.body.max_atmosphering_speed)).toBeGreaterThan(0);

    expect(resposta.body.name).toBe('Star Destroyer');
});

test('Deve receber uma mensagem de erro, quando buscar por uma nave inexistente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9999/');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});

it('', async() => {
    //planets/1/
    const resposta = await request('https://swapi.dev/api').get('/planets/1/');
});

test('Deve visualizar informações de cadastro, quando buscar um planeta existente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/planets/1/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.residents).toBeDefined();
    expect(resposta.body.films).toBeDefined();
    expect(Number(resposta.body.rotation_period)).toBeGreaterThan(0);
    expect(Number(resposta.body.orbital_period)).toBeGreaterThan(0);

    expect(resposta.body.name).toBe('Tatooine');
});

test('Deve receber uma mensagem de erro, quando buscar por um planeta inexistente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});

it('', async() => {
//starships/49/
    const resposta = await request('https://swapi.dev/api').get('/starships/49/');
});

test('Deve visualizar informações de cadastro, quando buscar uma nave existente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/starships/49/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.films).toBeDefined();
    expect(Number(resposta.body.length)).toBeGreaterThan(0);
    expect(Number(resposta.body.crew)).toBeGreaterThan(0);

    expect(resposta.body.name).toBe('H-type Nubian yacht');
});

test('Deve receber uma mensagem de erro, quando buscar por uma nave inexistente', async() => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});


 