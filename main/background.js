import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
	serve({ directory: 'app' });
} else {
	app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
	await app.whenReady();

	const mainWindow = createWindow('main', {
		width: 1350,
		height: 590,
	});

	if (isProd) {
		await mainWindow.loadURL('app://./mainpage.html');
	} else {
		const port = process.argv[2];
		await mainWindow.loadURL(`http://localhost:${port}/mainpage`);
		mainWindow.webContents.openDevTools();
	}

	// app.on('second-instance', async () => {
	// 	app.relaunch();
	// 	await mainWindow.loadURL('app://./callback.html');
	// 	app.exit();
	// });

})();

app.on('window-all-closed', () => {
	app.quit();
});
