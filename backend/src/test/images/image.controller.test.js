import request from 'supertest';
import app from '../../app';
import path from 'path';

describe('uploadImage', () => {
  it('debería cargar una imagen correctamente', async () => {
    const filePath = path.resolve(__dirname, 'profile.jpg');
    const response = await request(app).post('/api/v1/images/upload').attach('image', filePath);
    expect(response.status).toBe(200);

    expect(response.body.photo_url).toBeTruthy();
  });

  it('debería manejar errores al cargar una imagen', async () => {
    const response = await request(app)
      .post('/api/v1/images/upload')
      .attach('image', Buffer.from([]), { filename: 'empty.jpg' });

    expect(response.status).toBe(500);

    expect(response.body.error).toBe('Error al cargar la imagen');
  });
});
