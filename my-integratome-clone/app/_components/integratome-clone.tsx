"use client"
import React, { useState } from "react";
import {
	Activity,
	Heart,
	Users,
	TrendingUp,
	ChevronDown,
	Menu,
	X,
	CheckCircle,
	ArrowRight,
} from "lucide-react";

export default function IntegratomeClone() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className='min-h-screen bg-white'>
			{/* Header */}
			<header className='fixed top-0 w-full bg-white shadow-sm z-50'>
				<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<div className='flex items-center'>
							<Activity className='w-8 h-8 text-blue-600' />
							<span className='ml-2 text-xl font-bold text-gray-900'>
								Integratome
							</span>
						</div>

						<div className='hidden md:flex items-center space-x-8'>
							<a
								href='#solution'
								className='text-gray-700 hover:text-blue-600'>
								Solution
							</a>
							<a
								href='#fonctionnement'
								className='text-gray-700 hover:text-blue-600'>
								Comment ça fonctionne
							</a>
							<a
								href='#cas-usage'
								className='text-gray-700 hover:text-blue-600'>
								Cas d&apos;usage
							</a>
							<a
								href='#contact'
								className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700'>
								Contact
							</a>
						</div>

						<button
							className='md:hidden'
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							{mobileMenuOpen ? <X /> : <Menu />}
						</button>
					</div>

					{mobileMenuOpen && (
						<div className='md:hidden py-4 space-y-4'>
							<a
								href='#solution'
								className='block text-gray-700'>
								Solution
							</a>
							<a
								href='#fonctionnement'
								className='block text-gray-700'>
								Comment ça fonctionne
							</a>
							<a
								href='#cas-usage'
								className='block text-gray-700'>
								Cas d&apos;usage
							</a>
							<a
								href='#contact'
								className='block text-blue-600'>
								Contact
							</a>
						</div>
					)}
				</nav>
			</header>

			{/* Hero Section */}
			<section className='pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center max-w-4xl mx-auto'>
						<h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
							L&apos;architecte du jumeau numérique de santé
						</h1>
						<p className='text-xl text-gray-600 mb-8'>
							La plateforme SaaS pour les professionnels de santé offrant une
							nouvelle approche de la prévention.
						</p>
						<button className='bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition'>
							Découvrir la plateforme
						</button>
					</div>
				</div>
			</section>

			{/* Main Value Proposition */}
			<section
				id='solution'
				className='py-20 px-4'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-4'>
							Une médecine préventive de précision
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Integratome propose une nouvelle approche de la prévention, en
							modélisant le Jumeau Numérique de Santé des profils patients.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8 mb-16'>
						<div className='bg-blue-50 p-8 rounded-2xl'>
							<div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4'>
								<Activity className='w-6 h-6 text-white' />
							</div>
							<h3 className='text-xl font-bold mb-3'>
								Visualisation organisée
							</h3>
							<p className='text-gray-600'>
								État de santé actuel et projeté, construit à partir de données
								déclaratives, d&apos;antécédents et d&apos;habitudes de vie.
							</p>
						</div>

						<div className='bg-green-50 p-8 rounded-2xl'>
							<div className='w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4'>
								<TrendingUp className='w-6 h-6 text-white' />
							</div>
							<h3 className='text-xl font-bold mb-3'>Présentation claire</h3>
							<p className='text-gray-600'>
								Résultats consolidés et mise en perspective avec les données de
								référence officielle.
							</p>
						</div>

						<div className='bg-purple-50 p-8 rounded-2xl'>
							<div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4'>
								<CheckCircle className='w-6 h-6 text-white' />
							</div>
							<h3 className='text-xl font-bold mb-3'>Recommandations</h3>
							<p className='text-gray-600'>
								Agrégation systématique des recommandations de prévention émises
								par les autorités de santé.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* How it Works */}
			<section
				id='fonctionnement'
				className='py-20 px-4 bg-gray-50'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-4'>
							Comment ça fonctionne ?
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Imaginez un GPS de santé : Integratome situe chaque patient par
							rapport à son jumeau numérique de santé normé issu des études de
							population générale.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<div className='bg-white p-8 rounded-2xl shadow-sm'>
							<div className='text-3xl font-bold text-blue-600 mb-4'>01</div>
							<h3 className='text-2xl font-bold mb-4'>
								COLLECTER ET QUALIFIER
							</h3>
							<p className='text-gray-600'>
								Centralisation des données de santé déclaratives et mesurées :
								questionnaires santé, résultats biologiques, informations mode
								de vie, examens cliniques.
							</p>
						</div>

						<div className='bg-white p-8 rounded-2xl shadow-sm'>
							<div className='text-3xl font-bold text-blue-600 mb-4'>02</div>
							<h3 className='text-2xl font-bold mb-4'>VISUALISER</h3>
							<p className='text-gray-600'>
								Présentation structurée des données en jumeau numérique de santé
								actuel et en comparaison avec les données issues de la
								population générale.
							</p>
						</div>

						<div className='bg-white p-8 rounded-2xl shadow-sm'>
							<div className='text-3xl font-bold text-blue-600 mb-4'>03</div>
							<h3 className='text-2xl font-bold mb-4'>INFORMER</h3>
							<p className='text-gray-600'>
								Communication de conseils d&apos;hygiène de vie issus des
								référentiels de bonnes pratiques professionnelles.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className='py-20 px-4'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-4xl font-bold text-center mb-16'>
						Ce que le Jumeau Numérique de Santé apporte à votre pratique
					</h2>

					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div className='space-y-6'>
							<div className='flex items-start space-x-4'>
								<CheckCircle className='w-6 h-6 text-green-600 flex-shrink-0 mt-1' />
								<p className='text-gray-700'>
									Mise en évidence des facteurs de vigilance et tendances du
									profil pris en charge issus des données disponibles.
								</p>
							</div>
							<div className='flex items-start space-x-4'>
								<CheckCircle className='w-6 h-6 text-green-600 flex-shrink-0 mt-1' />
								<p className='text-gray-700'>
									Visualisation des écarts de santé par rapport à des profils de
									référence issus de la population générale.
								</p>
							</div>
							<div className='flex items-start space-x-4'>
								<CheckCircle className='w-6 h-6 text-green-600 flex-shrink-0 mt-1' />
								<p className='text-gray-700'>
									Restitution structurée des orientations possibles en cohérence
									avec les recommandations professionnelles.
								</p>
							</div>
							<div className='flex items-start space-x-4'>
								<CheckCircle className='w-6 h-6 text-green-600 flex-shrink-0 mt-1' />
								<p className='text-gray-700'>
									Conseils de santé publique organisés selon le profil déclaré.
								</p>
							</div>
						</div>

						<div className='bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl'>
							<div className='space-y-4'>
								<div className='bg-white p-4 rounded-lg shadow-sm'>
									<p className='font-semibold text-blue-600'>Gain de temps</p>
								</div>
								<div className='bg-white p-4 rounded-lg shadow-sm'>
									<p className='font-semibold text-green-600'>Vision à 360°</p>
								</div>
								<div className='bg-white p-4 rounded-lg shadow-sm'>
									<p className='font-semibold text-purple-600'>
										Suivi structuré
									</p>
								</div>
								<div className='bg-white p-4 rounded-lg shadow-sm'>
									<p className='font-semibold text-orange-600'>
										Référentiels consolidés
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Science Behind */}
			<section className='py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-700 text-white'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-4xl font-bold text-center mb-16'>
						La science derrière le Jumeau Numérique de Santé d&apos;Integratome
					</h2>

					<div className='grid md:grid-cols-3 gap-8 mb-12'>
						<div className='bg-white/10 p-6 rounded-xl backdrop-blur'>
							<h3 className='text-xl font-bold mb-3'>
								Élicitation de connaissances médicales
							</h3>
							<p className='text-blue-100'>
								Base enrichie par des données nationales, des recommandations
								professionnelles et des autorités de santé (HAS, NICE).
							</p>
						</div>

						<div className='bg-white/10 p-6 rounded-xl backdrop-blur'>
							<h3 className='text-xl font-bold mb-3'>Algorithmes bayésiens</h3>
							<p className='text-blue-100'>
								Modélisation des interactions complexes entre données cliniques,
								biologiques, habitudes de vie et facteurs environnementaux.
							</p>
						</div>

						<div className='bg-white/10 p-6 rounded-xl backdrop-blur'>
							<h3 className='text-xl font-bold mb-3'>
								Intelligence artificielle symbolique
							</h3>
							<p className='text-blue-100'>
								Règles et connaissances expertes prédéfinies, garantissant la
								transparence, la traçabilité et la conformité.
							</p>
						</div>
					</div>

					<div className='text-center'>
						<div className='inline-block bg-white/10 backdrop-blur px-8 py-4 rounded-full'>
							<p className='text-lg'>
								<span className='font-bold'>+1000</span> algorithmes |
								<span className='font-bold'> 14</span> systèmes
								physiopathologiques |<span className='font-bold'> +50</span>{" "}
								thématiques médicales
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Use Cases */}
			<section
				id='cas-usage'
				className='py-20 px-4'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-4xl font-bold text-center mb-16'>
						Cas d&apos;usage de notre Jumeau Numérique de Santé
					</h2>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{[
							{
								title: "Centres de bilans & cliniques",
								description:
									"Bilan structuré et standardisé en moins de 3 clics, harmonisé et enrichi par les données de prévention officielles consolidées.",
								color: "blue",
							},
							{
								title: "Pharmacies & professionnels de santé",
								description:
									"Appui aux bilans de prévention type ARS pour prioriser les actions préventives et orienter la suite du parcours.",
								color: "green",
							},
							{
								title: "Laboratoires & centres d'analyse",
								description:
									"Complément aux résultats d'analyses biologiques avec contextualisation automatique selon les référentiels de santé publique.",
								color: "purple",
							},
							{
								title: "Industrie & compléments alimentaires",
								description:
									"Profilage santé et orientation vers des recommandations produits adaptées.",
								color: "orange",
							},
							{
								title: "Assurances",
								description:
									"Vision consolidée des facteurs de vigilance et scénarios préventifs projetés.",
								color: "red",
							},
						].map((useCase, index) => (
							<div
								key={index}
								className='bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-blue-600 transition cursor-pointer'>
								<h3 className='text-xl font-bold mb-3'>{useCase.title}</h3>
								<p className='text-gray-600 mb-4'>{useCase.description}</p>
								<ArrowRight className={`w-5 h-5 text-${useCase.color}-600`} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose */}
			<section className='py-20 px-4 bg-gray-50'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-4xl font-bold text-center mb-16'>
						Pourquoi choisir Integratome ?
					</h2>

					<div className='grid md:grid-cols-3 gap-8'>
						<div className='bg-white p-8 rounded-2xl shadow-sm'>
							<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
								<Users className='w-8 h-8 text-blue-600' />
							</div>
							<h3 className='text-2xl font-bold mb-4'>EXPERTISE UNIQUE</h3>
							<p className='text-gray-600'>
								Basée sur 25 ans de modélisation et d&apos;expertise médicale
								pluriprofessionnelle, notre approche est reconnue et validée par
								la communauté médicale.
							</p>
						</div>

						<div className='bg-white p-8 rounded-2xl shadow-sm'>
							<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6'>
								<CheckCircle className='w-8 h-8 text-green-600' />
							</div>
							<h3 className='text-2xl font-bold mb-4'>Pertinence MÉDICALE</h3>
							<p className='text-gray-600'>
								Toutes les restitutions s&apos;appuient sur les données de santé
								publique officielles et respectent les recommandations de bonnes
								pratiques professionnelles.
							</p>
						</div>

						<div className='bg-white p-8 rounded-2xl shadow-sm'>
							<div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6'>
								<Heart className='w-8 h-8 text-purple-600' />
							</div>
							<h3 className='text-2xl font-bold mb-4'>VISION NOVATRICE</h3>
							<p className='text-gray-600'>
								La médecine des 6P : prédictive, personnalisée, préventive,
								participative, pertinente et pluriprofessionnelle.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section
				id='contact'
				className='py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-4xl font-bold mb-6'>
						Prêt à transformer votre pratique médicale ?
					</h2>
					<p className='text-xl mb-8 text-blue-100'>
						Découvrez comment Integratome peut améliorer votre approche de la
						médecine préventive.
					</p>
					<button className='bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition'>
						Demander une démonstration
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-gray-900 text-white py-12 px-4'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid md:grid-cols-4 gap-8 mb-8'>
						<div>
							<div className='flex items-center mb-4'>
								<Activity className='w-8 h-8 text-blue-400' />
								<span className='ml-2 text-xl font-bold'>Integratome</span>
							</div>
							<p className='text-gray-400'>
								L&apos;architecte du jumeau numérique de santé
							</p>
						</div>

						<div>
							<h4 className='font-bold mb-4'>Solution</h4>
							<ul className='space-y-2 text-gray-400'>
								<li>
									<a
										href='#'
										className='hover:text-white'>
										Plateforme
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-white'>
										Fonctionnalités
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-white'>
										Tarifs
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className='font-bold mb-4'>Entreprise</h4>
							<ul className='space-y-2 text-gray-400'>
								<li>
									<a
										href='#'
										className='hover:text-white'>
										À propos
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-white'>
										Équipe
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-white'>
										Contact
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className='font-bold mb-4'>Légal</h4>
							<ul className='space-y-2 text-gray-400'>
								<li>
									<a
										href='#'
										className='hover:text-white'>
										Mentions légales
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-white'>
										Confidentialité
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-white'>
										CGU
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='border-t border-gray-800 pt-8 text-center text-gray-400'>
						<p>&copy; 2024 Integratome. Tous droits réservés.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
