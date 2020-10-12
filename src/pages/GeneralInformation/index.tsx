import React, { useState } from 'react';
import { 
	View, ScrollView, Text, 
	TouchableOpacity, StatusBar, Linking
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../Components/PageHeader';
import styles from './styles';

export default function GeneralInfo(){
	StatusBar.setBarStyle('light-content', true);

	const [visibleItem, setvisibleItem] = useState('01');

	function handdleVisibleItem(index){
		(visibleItem === index ? setvisibleItem('') : setvisibleItem(index))
	}
	
	return(
		<View style={styles.container}>
			<PageHeader title="Informações Gerais" destination="Home"/>

			<ScrollView style={styles.content}>
				<View style={styles.item}>
					<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem('01')}>
						<Text style={styles.itemIndex}>01</Text>
						<Text style={styles.itemTitle}>Dicas da região</Text>
						<Feather style={styles.itemIcon} name={(visibleItem === '01' ? ('minus'): ('plus'))}></Feather>
					</TouchableOpacity>
					
					{ visibleItem === '01' && (
						<View style={styles.itemContent}>
							<Text style={styles.itemDescription}>
								– Vá de metrô. O Centro de Convenções Rebouças fica ao lado (300m) da Estação Clínicas do Metrô. 
								O local possui fácil acesso pela Avenida Paulista, Rebouças e Dr. Arnaldo.
							</Text>
							<Text style={styles.itemDescription}>
								– Evite ir de carro. Dependendo da movimentação do dia, o estacionamento pode lotar. 
								São pouco mais de 300 vagas.
							</Text>
							<Text style={styles.itemDescription}>
								A região dos Jardins, próxima do local, é um dos principais pontos turísticos de São Paulo 
								devido à presença de diversas lojas de grifes internacionais, museus, restaurantes e bares.
							</Text>
							<Text style={styles.itemDescription}>
								Para sua comodidade, o Centro de Convenções Rebouças oferece um guia de bolso prático e 
								diferenciado criado para facilitar sua estada.  No guia você encontrará informações sobre os 
								serviços próximos ao Centro de Convenções Rebouças, opções de hospedagem, gastronomia, lazer 
								e cultura, centros de compras, além de serviços e informações úteis que a cidade de São Paulo 
								lhe oferece. Clique aqui para acessar o guia.
							</Text>
						</View>
					)}
				</View>

				<View style={styles.item}>
					<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem('02')}>
						<Text style={styles.itemIndex}>02</Text>
						<Text style={styles.itemTitle}>Crachá</Text>
						<Feather style={styles.itemIcon} name={(visibleItem === '02' ? ('minus'): ('plus'))}></Feather>
					</TouchableOpacity>
					
					{ visibleItem === '02' && (
						<View style={styles.itemContent}>
							<Text style={styles.itemDescription}>
								Todo participante receberá um crachá pessoal e intransferível. Seu uso é OBRIGATÓRIO em todas 
								as dependências do Congresso, inclusive na área de Exposição. Para emissão de segunda via 
								haverá um custo de R$ 20,00 e a solicitação deverá ser feita na Secretaria do evento.
							</Text>
						</View>
					)}
				</View>

				<View style={styles.item}>
					<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem('03')}>
						<Text style={styles.itemIndex}>03</Text>
						<Text style={styles.itemTitle}>Agência Nacional de Vigilância Sanitária - ANVISA</Text>
						<Feather style={styles.itemIcon} name={(visibleItem === '03' ? ('minus'): ('plus'))}></Feather>
					</TouchableOpacity>
					
					{ visibleItem === '03' && (
						<View style={styles.itemContent}>
							<Text style={styles.itemDescription}>
								Para atender à regulamentação da ANVISA, durante a realização do CINDOR 2020 só será permitida 
								a distribuição de amostra grátis, brindes e promoção de medicamentos de venda sob prescrição 
								médica, para profissionais habilitados a prescrevê-los.
							</Text>
						</View>
					)}
				</View>

				<View style={styles.item}>
					<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem('04')}>
						<Text style={styles.itemIndex}>04</Text>
						<Text style={styles.itemTitle}>Área de exposição</Text>
						<Feather style={styles.itemIcon} name={(visibleItem === '04' ? ('minus'): ('plus'))}></Feather>
					</TouchableOpacity>
					
					{ visibleItem === '04' && (
						<View style={styles.itemContent}>
							<Text style={styles.itemDescription}>
								Uma exposição de produtos ligados à área estará disponível para os congressistas e palestrantes, 
								durante o Congresso. Convidamos a todos para visitarem a Exposição.
							</Text>
						</View>
					)}
				</View>

				<View style={styles.item}>
					<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem('05')}>
						<Text style={styles.itemIndex}>05</Text>
						<Text style={styles.itemTitle}>Alteração na programação científica</Text>
						<Feather style={styles.itemIcon} name={(visibleItem === '05' ? ('minus'): ('plus'))}></Feather>
					</TouchableOpacity>
					
					{ visibleItem === '05' && (
						<View style={styles.itemContent}>
							<Text style={styles.itemDescription}>
								A Comissão Científica e a Comissão Organizadora reservam-se o direito de realizar quaisquer 
								mudanças necessárias no programa, para atender a razões técnicas e/ou científicas.
							</Text>
						</View>
					)}
				</View>

				<View style={styles.item}>
					<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem('06')}>
						<Text style={styles.itemIndex}>06</Text>
						<Text style={styles.itemTitle}>Lotação das salas</Text>
						<Feather style={styles.itemIcon} name={(visibleItem === '06' ? ('minus'): ('plus'))}></Feather>
					</TouchableOpacity>
					
					{ visibleItem === '06' && (
						<View style={styles.itemContent}>
							<Text style={styles.itemDescription}>
								Todos os inscritos no congresso terão acesso a todas as salas de atividade científicas. 
								As salas têm número limitado de assentos, que serão ocupados de acordo com o fluxo de chegada 
								dos participantes. Por motivo de segurança, caso a sala atinja a capacidade máxima, não será 
								permitida a permanência de pessoas em pé ou sentadas no chão. Será preciso escolher outra atividade.
							</Text>
						</View>
					)}
				</View>

				<View style={styles.item}>
					<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem('07')}>
						<Text style={styles.itemIndex}>07</Text>
						<Text style={styles.itemTitle}>Certificado</Text>
						<Feather style={styles.itemIcon} name={(visibleItem === '07' ? ('minus'): ('plus'))}></Feather>
					</TouchableOpacity>
					
					{ visibleItem === '07' && (
						<View style={styles.itemContent}>
							<Text style={styles.itemDescription}>
								Os certificados de participação somente serão emitidos para os inscritos que efetivamente 
								comparecerem e participarem do congresso e/ou do curso.
							</Text>
						</View>
					)}
				</View>

				<View style={styles.item}>
					<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem('08')}>
						<Text style={styles.itemIndex}>08</Text>
						<Text style={styles.itemTitle}>Achados e perdidos</Text>
						<Feather style={styles.itemIcon} name={(visibleItem === '08' ? ('minus'): ('plus'))}></Feather>
					</TouchableOpacity>
					
					{ visibleItem === '08' && (
						<View style={styles.itemContent}>
							<Text style={styles.itemDescription}>
								Estarão concentrados na Secretaria do congresso.
							</Text>
						</View>
					)}
				</View>

				<View style={styles.item}>
					<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem('09')}>
						<Text style={styles.itemIndex}>09</Text>
						<Text style={styles.itemTitle}>Avisos importantes</Text>
						<Feather style={styles.itemIcon} name={(visibleItem === '09' ? ('minus'): ('plus'))}></Feather>
					</TouchableOpacity>
					
					{ visibleItem === '09' && (
						<View style={styles.itemContent}>
							<Text style={styles.itemDescription}>
								– Proibido fumar nas dependências do Centro de Convenções Rebouças.
							</Text>
							<Text style={styles.itemDescription}>
								– Proibido fotografar ou filmar as atividades científicas, bem como a utilização de qualquer 
								informação ou material científico apresentado, sem a autorização prévia, por escrito, da Comissão 
								Organizadora.
							</Text>
							<Text style={styles.itemDescription}>
								– Durante as sessões científicas, solicita-se que os telefones celulares sejam desligados ou, 
								para casos de emergência, seja ativada a opção silenciosa dos mesmos, evitando problemas com os 
								palestrantes, com a plateia ou com interferência no som da sala.
							</Text>
							<Text style={styles.itemDescription}>
								– Cuide dos seus pertences não os deixando nas salas nos intervalos. O CCR – Centro de Convenções 
								Rebouças, as empresas Promotora e Organizadora do evento não se responsabilizarão por nenhuma 
								ocorrência.
							</Text>
						</View>
					)}
				</View>

				<View style={styles.item}>
					<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem('10')}>
						<Text style={styles.itemIndex}>10</Text>
						<Text style={styles.itemTitle}>Material do participante</Text>
						<Feather style={styles.itemIcon} name={(visibleItem === '10' ? ('minus'): ('plus'))}></Feather>
					</TouchableOpacity>
					
					{ visibleItem === '10' && (
						<View style={styles.itemContent}>
							<Text style={styles.itemDescription}>
								Garantimos material (pasta, bloco, caneta e programa) somente para os pré-inscritos. 
								O material para as inscrições realizadas no local dependerá de disponibilidade.
							</Text>
						</View>
					)}
				</View>

				<View style={styles.item}></View>

			</ScrollView>
		</View>
	)
}