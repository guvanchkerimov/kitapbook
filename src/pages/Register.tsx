function Register() {
	return (
		<div className="container mx-auto">
			<div className="text-lg">Register</div>
			<div className="w-2/4 mx-auto mt-20">
				<input
					type="text"
					placeholder="Ady"
					className="w-full shadow border rounded p-2 bg-gray-100 text-gray-700 hover:border-gray-600"
				/>
				<input
					type="email"
					placeholder="email"
					className="w-full shadow border rounded p-2 bg-gray-100 text-gray-700 hover:border-gray-600"
				/>
				<button className="w-full bg-yellow-400 hover:bg-yellow-500 text-dark font-bold py-2 px-4 rounded">
					Register
				</button>
			</div>
		</div>
	);
}

export default Register;
