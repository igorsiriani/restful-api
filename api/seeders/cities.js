const connection = require('../../dbconection');


const sql1 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(1, 'Afonso Cláudio', 8),\n" +
    "(2, 'Água Doce do Norte', 8),\n" +
    "(3, 'Águia Branca', 8),\n" +
    "(4, 'Alegre', 8),\n" +
    "(5, 'Alfredo Chaves', 8),\n" +
    "(6, 'Alto Rio Novo', 8),\n" +
    "(7, 'Anchieta', 8),\n" +
    "(8, 'Apiacá', 8),\n" +
    "(9, 'Aracruz', 8),\n" +
    "(10, 'Atilio Vivacqua', 8),\n" +
    "(11, 'Baixo Guandu', 8),\n" +
    "(12, 'Barra de São Francisco', 8),\n" +
    "(13, 'Boa Esperança', 8),\n" +
    "(14, 'Bom Jesus do Norte', 8),\n" +
    "(15, 'Brejetuba', 8),\n" +
    "(16, 'Cachoeiro de Itapemirim', 8),\n" +
    "(17, 'Cariacica', 8),\n" +
    "(18, 'Castelo', 8),\n" +
    "(19, 'Colatina', 8),\n" +
    "(20, 'Conceição da Barra', 8),\n" +
    "(21, 'Conceição do Castelo', 8),\n" +
    "(22, 'Divino de São Lourenço', 8),\n" +
    "(23, 'Domingos Martins', 8),\n" +
    "(24, 'Dores do Rio Preto', 8),\n" +
    "(25, 'Ecoporanga', 8),\n" +
    "(26, 'Fundão', 8),\n" +
    "(27, 'Governador Lindenberg', 8),\n" +
    "(28, 'Guaçuí', 8),\n" +
    "(29, 'Guarapari', 8),\n" +
    "(30, 'Ibatiba', 8),\n" +
    "(31, 'Ibiraçu', 8),\n" +
    "(32, 'Ibitirama', 8),\n" +
    "(33, 'Iconha', 8),\n" +
    "(34, 'Irupi', 8),\n" +
    "(35, 'Itaguaçu', 8),\n" +
    "(36, 'Itapemirim', 8),\n" +
    "(37, 'Itarana', 8),\n" +
    "(38, 'Iúna', 8),\n" +
    "(39, 'Jaguaré', 8),\n" +
    "(40, 'Jerônimo Monteiro', 8),\n" +
    "(41, 'João Neiva', 8),\n" +
    "(42, 'Laranja da Terra', 8),\n" +
    "(43, 'Linhares', 8),\n" +
    "(44, 'Mantenópolis', 8),\n" +
    "(45, 'Marataízes', 8),\n" +
    "(46, 'Marechal Floriano', 8),\n" +
    "(47, 'Marilândia', 8),\n" +
    "(48, 'Mimoso do Sul', 8),\n" +
    "(49, 'Montanha', 8),\n" +
    "(50, 'Mucurici', 8),\n" +
    "(51, 'Muniz Freire', 8),\n" +
    "(52, 'Muqui', 8),\n" +
    "(53, 'Nova Venécia', 8),\n" +
    "(54, 'Pancas', 8),\n" +
    "(55, 'Pedro Canário', 8),\n" +
    "(56, 'Pinheiros', 8),\n" +
    "(57, 'Piúma', 8),\n" +
    "(58, 'Ponto Belo', 8),\n" +
    "(59, 'Presidente Kennedy', 8),\n" +
    "(60, 'Rio Bananal', 8),\n" +
    "(61, 'Rio Novo do Sul', 8),\n" +
    "(62, 'Santa Leopoldina', 8),\n" +
    "(63, 'Santa Maria de Jetibá', 8),\n" +
    "(64, 'Santa Teresa', 8),\n" +
    "(65, 'São Domingos do Norte', 8),\n" +
    "(66, 'São Gabriel da Palha', 8),\n" +
    "(67, 'São José do Calçado', 8),\n" +
    "(68, 'São Mateus', 8),\n" +
    "(69, 'São Roque do Canaã', 8),\n" +
    "(70, 'Serra', 8),\n" +
    "(71, 'Sooretama', 8),\n" +
    "(72, 'Vargem Alta', 8),\n" +
    "(73, 'Venda Nova do Imigrante', 8),\n" +
    "(74, 'Viana', 8),\n" +
    "(75, 'Vila Pavão', 8),\n" +
    "(76, 'Vila Valério', 8),\n" +
    "(77, 'Vila Velha', 8),\n" +
    "(78, 'Vitória', 8),\n" +
    "(79, 'Acrelândia', 1),\n" +
    "(80, 'Assis Brasil', 1),\n" +
    "(81, 'Brasiléia', 1),\n" +
    "(82, 'Bujari', 1),\n" +
    "(83, 'Capixaba', 1),\n" +
    "(84, 'Cruzeiro do Sul', 1),\n" +
    "(85, 'Epitaciolândia', 1),\n" +
    "(86, 'Feijó', 1),\n" +
    "(87, 'Jordão', 1),\n" +
    "(88, 'Mâncio Lima', 1),\n" +
    "(89, 'Manoel Urbano', 1),\n" +
    "(90, 'Marechal Thaumaturgo', 1),\n" +
    "(91, 'Plácido de Castro', 1),\n" +
    "(92, 'Porto Acre', 1),\n" +
    "(93, 'Porto Walter', 1),\n" +
    "(94, 'Rio Branco', 1),\n" +
    "(95, 'Rodrigues Alves', 1),\n" +
    "(96, 'Santa Rosa do Purus', 1),\n" +
    "(97, 'Sena Madureira', 1),\n" +
    "(98, 'Senador Guiomard', 1),\n" +
    "(99, 'Tarauacá', 1),\n" +
    "(100, 'Xapuri', 1),\n" +
    "(101, 'Água Branca', 2),\n" +
    "(102, 'Anadia', 2),\n" +
    "(103, 'Arapiraca', 2),\n" +
    "(104, 'Atalaia', 2),\n" +
    "(105, 'Barra de Santo Antônio', 2),\n" +
    "(106, 'Barra de São Miguel', 2),\n" +
    "(107, 'Batalha', 2),\n" +
    "(108, 'Belém', 2),\n" +
    "(109, 'Belo Monte', 2),\n" +
    "(110, 'Boca da Mata', 2),\n" +
    "(111, 'Branquinha', 2),\n" +
    "(112, 'Cacimbinhas', 2),\n" +
    "(113, 'Cajueiro', 2),\n" +
    "(114, 'Campestre', 2),\n" +
    "(115, 'Campo Alegre', 2),\n" +
    "(116, 'Campo Grande', 2),\n" +
    "(117, 'Canapi', 2),\n" +
    "(118, 'Capela', 2),\n" +
    "(119, 'Carneiros', 2),\n" +
    "(120, 'Chã Preta', 2),\n" +
    "(121, 'Coité do Nóia', 2),\n" +
    "(122, 'Colônia Leopoldina', 2),\n" +
    "(123, 'Coqueiro Seco', 2),\n" +
    "(124, 'Coruripe', 2),\n" +
    "(125, 'Craíbas', 2),\n" +
    "(126, 'Delmiro Gouveia', 2),\n" +
    "(127, 'Dois Riachos', 2),\n" +
    "(128, 'Estrela de Alagoas', 2),\n" +
    "(129, 'Feira Grande', 2),\n" +
    "(130, 'Feliz Deserto', 2),\n" +
    "(131, 'Flexeiras', 2),\n" +
    "(132, 'Girau do Ponciano', 2),\n" +
    "(133, 'Ibateguara', 2),\n" +
    "(134, 'Igaci', 2),\n" +
    "(135, 'Igreja Nova', 2),\n" +
    "(136, 'Inhapi', 2),\n" +
    "(137, 'Jacaré dos Homens', 2),\n" +
    "(138, 'Jacuípe', 2),\n" +
    "(139, 'Japaratinga', 2),\n" +
    "(140, 'Jaramataia', 2),\n" +
    "(141, 'Jequiá da Praia', 2),\n" +
    "(142, 'Joaquim Gomes', 2),\n" +
    "(143, 'Jundiá', 2),\n" +
    "(144, 'Junqueiro', 2),\n" +
    "(145, 'Lagoa da Canoa', 2),\n" +
    "(146, 'Limoeiro de Anadia', 2),\n" +
    "(147, 'Maceió', 2),\n" +
    "(148, 'Major Isidoro', 2),\n" +
    "(149, 'Mar Vermelho', 2),\n" +
    "(150, 'Maragogi', 2),\n" +
    "(151, 'Maravilha', 2),\n" +
    "(152, 'Marechal Deodoro', 2),\n" +
    "(153, 'Maribondo', 2),\n" +
    "(154, 'Mata Grande', 2),\n" +
    "(155, 'Matriz de Camaragibe', 2),\n" +
    "(156, 'Messias', 2),\n" +
    "(157, 'Minador do Negrão', 2),\n" +
    "(158, 'Monteirópolis', 2),\n" +
    "(159, 'Murici', 2),\n" +
    "(160, 'Novo Lino', 2),\n" +
    "(161, 'Olho dÁgua das Flores', 2),\n" +
    "(162, 'Olho dÁgua do Casado', 2),\n" +
    "(163, 'Olho dÁgua Grande', 2),\n" +
    "(164, 'Olivença', 2),\n" +
    "(165, 'Ouro Branco', 2),\n" +
    "(166, 'Palestina', 2),\n" +
    "(167, 'Palmeira dos Índios', 2),\n" +
    "(168, 'Pão de Açúcar', 2),\n" +
    "(169, 'Pariconha', 2),\n" +
    "(170, 'Paripueira', 2),\n" +
    "(171, 'Passo de Camaragibe', 2),\n" +
    "(172, 'Paulo Jacinto', 2),\n" +
    "(173, 'Penedo', 2),\n" +
    "(174, 'Piaçabuçu', 2),\n" +
    "(175, 'Pilar', 2),\n" +
    "(176, 'Pindoba', 2),\n" +
    "(177, 'Piranhas', 2),\n" +
    "(178, 'Poço das Trincheiras', 2),\n" +
    "(179, 'Porto Calvo', 2),\n" +
    "(180, 'Porto de Pedras', 2),\n" +
    "(181, 'Porto Real do Colégio', 2),\n" +
    "(182, 'Quebrangulo', 2),\n" +
    "(183, 'Rio Largo', 2),\n" +
    "(184, 'Roteiro', 2),\n" +
    "(185, 'Santa Luzia do Norte', 2),\n" +
    "(186, 'Santana do Ipanema', 2),\n" +
    "(187, 'Santana do Mundaú', 2),\n" +
    "(188, 'São Brás', 2),\n" +
    "(189, 'São José da Laje', 2),\n" +
    "(190, 'São José da Tapera', 2),\n" +
    "(191, 'São Luís do Quitunde', 2),\n" +
    "(192, 'São Miguel dos Campos', 2),\n" +
    "(193, 'São Miguel dos Milagres', 2),\n" +
    "(194, 'São Sebastião', 2),\n" +
    "(195, 'Satuba', 2),\n" +
    "(196, 'Senador Rui Palmeira', 2),\n" +
    "(197, 'Tanque dArca', 2),\n" +
    "(198, 'Taquarana', 2),\n" +
    "(199, 'Teotônio Vilela', 2),\n" +
    "(200, 'Traipu', 2),\n" +
    "(201, 'União dos Palmares', 2),\n" +
    "(202, 'Viçosa', 2),\n" +
    "(203, 'Amapá', 4),\n" +
    "(204, 'Calçoene', 4),\n" +
    "(205, 'Cutias', 4),\n" +
    "(206, 'Ferreira Gomes', 4),\n" +
    "(207, 'Itaubal', 4),\n" +
    "(208, 'Laranjal do Jari', 4),\n" +
    "(209, 'Macapá', 4),\n" +
    "(210, 'Mazagão', 4),\n" +
    "(211, 'Oiapoque', 4),\n" +
    "(212, 'Pedra Branca do Amaparí', 4),\n" +
    "(213, 'Porto Grande', 4),\n" +
    "(214, 'Pracuúba', 4),\n" +
    "(215, 'Santana', 4),\n" +
    "(216, 'Serra do Navio', 4),\n" +
    "(217, 'Tartarugalzinho', 4),\n" +
    "(218, 'Vitória do Jari', 4),\n" +
    "(219, 'Alvarães', 3),\n" +
    "(220, 'Amaturá', 3),\n" +
    "(221, 'Anamã', 3),\n" +
    "(222, 'Anori', 3),\n" +
    "(223, 'Apuí', 3),\n" +
    "(224, 'Atalaia do Norte', 3),\n" +
    "(225, 'Autazes', 3),\n" +
    "(226, 'Barcelos', 3),\n" +
    "(227, 'Barreirinha', 3),\n" +
    "(228, 'Benjamin Constant', 3),\n" +
    "(229, 'Beruri', 3),\n" +
    "(230, 'Boa Vista do Ramos', 3),\n" +
    "(231, 'Boca do Acre', 3),\n" +
    "(232, 'Borba', 3),\n" +
    "(233, 'Caapiranga', 3),\n" +
    "(234, 'Canutama', 3),\n" +
    "(235, 'Carauari', 3),\n" +
    "(236, 'Careiro', 3),\n" +
    "(237, 'Careiro da Várzea', 3),\n" +
    "(238, 'Coari', 3),\n" +
    "(239, 'Codajás', 3),\n" +
    "(240, 'Eirunepé', 3),\n" +
    "(241, 'Envira', 3),\n" +
    "(242, 'Fonte Boa', 3),\n" +
    "(243, 'Guajará', 3),\n" +
    "(244, 'Humaitá', 3),\n" +
    "(245, 'Ipixuna', 3),\n" +
    "(246, 'Iranduba', 3),\n" +
    "(247, 'Itacoatiara', 3),\n" +
    "(248, 'Itamarati', 3),\n" +
    "(249, 'Itapiranga', 3),\n" +
    "(250, 'Japurá', 3),\n" +
    "(251, 'Juruá', 3),\n" +
    "(252, 'Jutaí', 3),\n" +
    "(253, 'Lábrea', 3),\n" +
    "(254, 'Manacapuru', 3),\n" +
    "(255, 'Manaquiri', 3),\n" +
    "(256, 'Manaus', 3),\n" +
    "(257, 'Manicoré', 3),\n" +
    "(258, 'Maraã', 3),\n" +
    "(259, 'Maués', 3),\n" +
    "(260, 'Nhamundá', 3),\n" +
    "(261, 'Nova Olinda do Norte', 3),\n" +
    "(262, 'Novo Airão', 3),\n" +
    "(263, 'Novo Aripuanã', 3),\n" +
    "(264, 'Parintins', 3),\n" +
    "(265, 'Pauini', 3),\n" +
    "(266, 'Presidente Figueiredo', 3),\n" +
    "(267, 'Rio Preto da Eva', 3),\n" +
    "(268, 'Santa Isabel do Rio Negro', 3),\n" +
    "(269, 'Santo Antônio do Içá', 3),\n" +
    "(270, 'São Gabriel da Cachoeira', 3),\n" +
    "(271, 'São Paulo de Olivença', 3),\n" +
    "(272, 'São Sebastião do Uatumã', 3),\n" +
    "(273, 'Silves', 3),\n" +
    "(274, 'Tabatinga', 3),\n" +
    "(275, 'Tapauá', 3),\n" +
    "(276, 'Tefé', 3),\n" +
    "(277, 'Tonantins', 3),\n" +
    "(278, 'Uarini', 3),\n" +
    "(279, 'Urucará', 3),\n" +
    "(280, 'Urucurituba', 3),\n" +
    "(281, 'Abaíra', 5),\n" +
    "(282, 'Abaré', 5),\n" +
    "(283, 'Acajutiba', 5),\n" +
    "(284, 'Adustina', 5),\n" +
    "(285, 'Água Fria', 5),\n" +
    "(286, 'Aiquara', 5),\n" +
    "(287, 'Alagoinhas', 5),\n" +
    "(288, 'Alcobaça', 5),\n" +
    "(289, 'Almadina', 5),\n" +
    "(290, 'Amargosa', 5),\n" +
    "(291, 'Amélia Rodrigues', 5),\n" +
    "(292, 'América Dourada', 5),\n" +
    "(293, 'Anagé', 5),\n" +
    "(294, 'Andaraí', 5),\n" +
    "(295, 'Andorinha', 5),\n" +
    "(296, 'Angical', 5),\n" +
    "(297, 'Anguera', 5),\n" +
    "(298, 'Antas', 5),\n" +
    "(299, 'Antônio Cardoso', 5),\n" +
    "(300, 'Antônio Gonçalves', 5),\n" +
    "(301, 'Aporá', 5),\n" +
    "(302, 'Apuarema', 5),\n" +
    "(303, 'Araças', 5),\n" +
    "(304, 'Aracatu', 5),\n" +
    "(305, 'Araci', 5),\n" +
    "(306, 'Aramari', 5),\n" +
    "(307, 'Arataca', 5),\n" +
    "(308, 'Aratuípe', 5),\n" +
    "(309, 'Aurelino Leal', 5),\n" +
    "(310, 'Baianópolis', 5),\n" +
    "(311, 'Baixa Grande', 5),\n" +
    "(312, 'Banzaê', 5),\n" +
    "(313, 'Barra', 5),\n" +
    "(314, 'Barra da Estiva', 5),\n" +
    "(315, 'Barra do Choça', 5),\n" +
    "(316, 'Barra do Mendes', 5),\n" +
    "(317, 'Barra do Rocha', 5),\n" +
    "(318, 'Barreiras', 5),\n" +
    "(319, 'Barro Alto', 5),\n" +
    "(320, 'Barro Preto (antigo Gov. Lomanto Jr.)', 5),\n" +
    "(321, 'Barrocas', 5),\n" +
    "(322, 'Belmonte', 5),\n" +
    "(323, 'Belo Campo', 5),\n" +
    "(324, 'Biritinga', 5),\n" +
    "(325, 'Boa Nova', 5),\n" +
    "(326, 'Boa Vista do Tupim', 5),\n" +
    "(327, 'Bom Jesus da Lapa', 5),\n" +
    "(328, 'Bom Jesus da Serra', 5),\n" +
    "(329, 'Boninal', 5),\n" +
    "(330, 'Bonito', 5),\n" +
    "(331, 'Boquira', 5),\n" +
    "(332, 'Botuporã', 5),\n" +
    "(333, 'Brejões', 5),\n" +
    "(334, 'Brejolândia', 5),\n" +
    "(335, 'Brotas de Macaúbas', 5),\n" +
    "(336, 'Brumado', 5),\n" +
    "(337, 'Buerarema', 5),\n" +
    "(338, 'Buritirama', 5),\n" +
    "(339, 'Caatiba', 5),\n" +
    "(340, 'Cabaceiras do Paraguaçu', 5),\n" +
    "(341, 'Cachoeira', 5),\n" +
    "(342, 'Caculé', 5),\n" +
    "(343, 'Caém', 5),\n" +
    "(344, 'Caetanos', 5),\n" +
    "(345, 'Caetité', 5),\n" +
    "(346, 'Cafarnaum', 5),\n" +
    "(347, 'Cairu', 5),\n" +
    "(348, 'Caldeirão Grande', 5),\n" +
    "(349, 'Camacan', 5),\n" +
    "(350, 'Camaçari', 5),\n" +
    "(351, 'Camamu', 5),\n" +
    "(352, 'Campo Alegre de Lourdes', 5),\n" +
    "(353, 'Campo Formoso', 5),\n" +
    "(354, 'Canápolis', 5),\n" +
    "(355, 'Canarana', 5),\n" +
    "(356, 'Canavieiras', 5),\n" +
    "(357, 'Candeal', 5),\n" +
    "(358, 'Candeias', 5),\n" +
    "(359, 'Candiba', 5),\n" +
    "(360, 'Cândido Sales', 5),\n" +
    "(361, 'Cansanção', 5),\n" +
    "(362, 'Canudos', 5),\n" +
    "(363, 'Capela do Alto Alegre', 5),\n" +
    "(364, 'Capim Grosso', 5),\n" +
    "(365, 'Caraíbas', 5),\n" +
    "(366, 'Caravelas', 5),\n" +
    "(367, 'Cardeal da Silva', 5),\n" +
    "(368, 'Carinhanha', 5),\n" +
    "(369, 'Casa Nova', 5),\n" +
    "(370, 'Castro Alves', 5),\n" +
    "(371, 'Catolândia', 5),\n" +
    "(372, 'Catu', 5),\n" +
    "(373, 'Caturama', 5),\n" +
    "(374, 'Central', 5),\n" +
    "(375, 'Chorrochó', 5),\n" +
    "(376, 'Cícero Dantas', 5),\n" +
    "(377, 'Cipó', 5),\n" +
    "(378, 'Coaraci', 5),\n" +
    "(379, 'Cocos', 5),\n" +
    "(380, 'Conceição da Feira', 5),\n" +
    "(381, 'Conceição do Almeida', 5),\n" +
    "(382, 'Conceição do Coité', 5),\n" +
    "(383, 'Conceição do Jacuípe', 5),\n" +
    "(384, 'Conde', 5),\n" +
    "(385, 'Condeúba', 5),\n" +
    "(386, 'Contendas do Sincorá', 5),\n" +
    "(387, 'Coração de Maria', 5),\n" +
    "(388, 'Cordeiros', 5),\n" +
    "(389, 'Coribe', 5),\n" +
    "(390, 'Coronel João Sá', 5),\n" +
    "(391, 'Correntina', 5),\n" +
    "(392, 'Cotegipe', 5),\n" +
    "(393, 'Cravolândia', 5),\n" +
    "(394, 'Crisópolis', 5),\n" +
    "(395, 'Cristópolis', 5),\n" +
    "(396, 'Cruz das Almas', 5),\n" +
    "(397, 'Curaçá', 5),\n" +
    "(398, 'Dário Meira', 5),\n" +
    "(399, 'Dias dÁvila', 5),\n" +
    "(400, 'Dom Basílio', 5),\n" +
    "(401, 'Dom Macedo Costa', 5),\n" +
    "(402, 'Elísio Medrado', 5),\n" +
    "(403, 'Encruzilhada', 5),\n" +
    "(404, 'Entre Rios', 5),\n" +
    "(405, 'Érico Cardoso', 5),\n" +
    "(406, 'Esplanada', 5),\n" +
    "(407, 'Euclides da Cunha', 5),\n" +
    "(408, 'Eunápolis', 5),\n" +
    "(409, 'Fátima', 5),\n" +
    "(410, 'Feira da Mata', 5),\n" +
    "(411, 'Feira de Santana', 5),\n" +
    "(412, 'Filadélfia', 5),\n" +
    "(413, 'Firmino Alves', 5),\n" +
    "(414, 'Floresta Azul', 5),\n" +
    "(415, 'Formosa do Rio Preto', 5),\n" +
    "(416, 'Gandu', 5),\n" +
    "(417, 'Gavião', 5),\n" +
    "(418, 'Gentio do Ouro', 5),\n" +
    "(419, 'Glória', 5),\n" +
    "(420, 'Gongogi', 5),\n" +
    "(421, 'Governador Mangabeira', 5),\n" +
    "(422, 'Guajeru', 5),\n" +
    "(423, 'Guanambi', 5),\n" +
    "(424, 'Guaratinga', 5),\n" +
    "(425, 'Heliópolis', 5),\n" +
    "(426, 'Iaçu', 5),\n" +
    "(427, 'Ibiassucê', 5),\n" +
    "(428, 'Ibicaraí', 5),\n" +
    "(429, 'Ibicoara', 5),\n" +
    "(430, 'Ibicuí', 5),\n" +
    "(431, 'Ibipeba', 5),\n" +
    "(432, 'Ibipitanga', 5),\n" +
    "(433, 'Ibiquera', 5),\n" +
    "(434, 'Ibirapitanga', 5),\n" +
    "(435, 'Ibirapuã', 5),\n" +
    "(436, 'Ibirataia', 5),\n" +
    "(437, 'Ibitiara', 5),\n" +
    "(438, 'Ibititá', 5),\n" +
    "(439, 'Ibotirama', 5),\n" +
    "(440, 'Ichu', 5),\n" +
    "(441, 'Igaporã', 5),\n" +
    "(442, 'Igrapiúna', 5),\n" +
    "(443, 'Iguaí', 5),\n" +
    "(444, 'Ilhéus', 5),\n" +
    "(445, 'Inhambupe', 5),\n" +
    "(446, 'Ipecaetá', 5),\n" +
    "(447, 'Ipiaú', 5),\n" +
    "(448, 'Ipirá', 5),\n" +
    "(449, 'Ipupiara', 5),\n" +
    "(450, 'Irajuba', 5),\n" +
    "(451, 'Iramaia', 5),\n" +
    "(452, 'Iraquara', 5),\n" +
    "(453, 'Irará', 5),\n" +
    "(454, 'Irecê', 5),\n" +
    "(455, 'Itabela', 5),\n" +
    "(456, 'Itaberaba', 5),\n" +
    "(457, 'Itabuna', 5),\n" +
    "(458, 'Itacaré', 5),\n" +
    "(459, 'Itaeté', 5),\n" +
    "(460, 'Itagi', 5),\n" +
    "(461, 'Itagibá', 5),\n" +
    "(462, 'Itagimirim', 5),\n" +
    "(463, 'Itaguaçu da Bahia', 5),\n" +
    "(464, 'Itaju do Colônia', 5),\n" +
    "(465, 'Itajuípe', 5),\n" +
    "(466, 'Itamaraju', 5),\n" +
    "(467, 'Itamari', 5),\n" +
    "(468, 'Itambé', 5),\n" +
    "(469, 'Itanagra', 5),\n" +
    "(470, 'Itanhém', 5),\n" +
    "(471, 'Itaparica', 5),\n" +
    "(472, 'Itapé', 5),\n" +
    "(473, 'Itapebi', 5),\n" +
    "(474, 'Itapetinga', 5),\n" +
    "(475, 'Itapicuru', 5),\n" +
    "(476, 'Itapitanga', 5),\n" +
    "(477, 'Itaquara', 5),\n" +
    "(478, 'Itarantim', 5),\n" +
    "(479, 'Itatim', 5),\n" +
    "(480, 'Itiruçu', 5),\n" +
    "(481, 'Itiúba', 5),\n" +
    "(482, 'Itororó', 5),\n" +
    "(483, 'Ituaçu', 5),\n" +
    "(484, 'Ituberá', 5),\n" +
    "(485, 'Iuiú', 5),\n" +
    "(486, 'Jaborandi', 5),\n" +
    "(487, 'Jacaraci', 5),\n" +
    "(488, 'Jacobina', 5),\n" +
    "(489, 'Jaguaquara', 5),\n" +
    "(490, 'Jaguarari', 5),\n" +
    "(491, 'Jaguaripe', 5),\n" +
    "(492, 'Jandaíra', 5),\n" +
    "(493, 'Jequié', 5),\n" +
    "(494, 'Jeremoabo', 5),\n" +
    "(495, 'Jiquiriçá', 5),\n" +
    "(496, 'Jitaúna', 5),\n" +
    "(497, 'João Dourado', 5),\n" +
    "(498, 'Juazeiro', 5),\n" +
    "(499, 'Jucuruçu', 5),\n" +
    "(500, 'Jussara', 5),\n" +
    "(501, 'Jussari', 5),\n" +
    "(502, 'Jussiape', 5),\n" +
    "(503, 'Lafaiete Coutinho', 5),\n" +
    "(504, 'Lagoa Real', 5),\n" +
    "(505, 'Laje', 5),\n" +
    "(506, 'Lajedão', 5),\n" +
    "(507, 'Lajedinho', 5),\n" +
    "(508, 'Lajedo do Tabocal', 5),\n" +
    "(509, 'Lamarão', 5),\n" +
    "(510, 'Lapão', 5),\n" +
    "(511, 'Lauro de Freitas', 5),\n" +
    "(512, 'Lençóis', 5),\n" +
    "(513, 'Licínio de Almeida', 5),\n" +
    "(514, 'Livramento de Nossa Senhora', 5),\n" +
    "(515, 'Luís Eduardo Magalhães', 5),\n" +
    "(516, 'Macajuba', 5),\n" +
    "(517, 'Macarani', 5),\n" +
    "(518, 'Macaúbas', 5),\n" +
    "(519, 'Macururé', 5),\n" +
    "(520, 'Madre de Deus', 5),\n" +
    "(521, 'Maetinga', 5),\n" +
    "(522, 'Maiquinique', 5),\n" +
    "(523, 'Mairi', 5),\n" +
    "(524, 'Malhada', 5),\n" +
    "(525, 'Malhada de Pedras', 5),\n" +
    "(526, 'Manoel Vitorino', 5),\n" +
    "(527, 'Mansidão', 5),\n" +
    "(528, 'Maracás', 5),\n" +
    "(529, 'Maragogipe', 5),\n" +
    "(530, 'Maraú', 5),\n" +
    "(531, 'Marcionílio Souza', 5),\n" +
    "(532, 'Mascote', 5),\n" +
    "(533, 'Mata de São João', 5),\n" +
    "(534, 'Matina', 5);";

const sql2 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(535, 'Medeiros Neto', 5),\n" +
    "(536, 'Miguel Calmon', 5),\n" +
    "(537, 'Milagres', 5),\n" +
    "(538, 'Mirangaba', 5),\n" +
    "(539, 'Mirante', 5),\n" +
    "(540, 'Monte Santo', 5),\n" +
    "(541, 'Morpará', 5),\n" +
    "(542, 'Morro do Chapéu', 5),\n" +
    "(543, 'Mortugaba', 5),\n" +
    "(544, 'Mucugê', 5),\n" +
    "(545, 'Mucuri', 5),\n" +
    "(546, 'Mulungu do Morro', 5),\n" +
    "(547, 'Mundo Novo', 5),\n" +
    "(548, 'Muniz Ferreira', 5),\n" +
    "(549, 'Muquém de São Francisco', 5),\n" +
    "(550, 'Muritiba', 5),\n" +
    "(551, 'Mutuípe', 5),\n" +
    "(552, 'Nazaré', 5),\n" +
    "(553, 'Nilo Peçanha', 5),\n" +
    "(554, 'Nordestina', 5),\n" +
    "(555, 'Nova Canaã', 5),\n" +
    "(556, 'Nova Fátima', 5),\n" +
    "(557, 'Nova Ibiá', 5),\n" +
    "(558, 'Nova Itarana', 5),\n" +
    "(559, 'Nova Redenção', 5),\n" +
    "(560, 'Nova Soure', 5),\n" +
    "(561, 'Nova Viçosa', 5),\n" +
    "(562, 'Novo Horizonte', 5),\n" +
    "(563, 'Novo Triunfo', 5),\n" +
    "(564, 'Olindina', 5),\n" +
    "(565, 'Oliveira dos Brejinhos', 5),\n" +
    "(566, 'Ouriçangas', 5),\n" +
    "(567, 'Ourolândia', 5),\n" +
    "(568, 'Palmas de Monte Alto', 5),\n" +
    "(569, 'Palmeiras', 5),\n" +
    "(570, 'Paramirim', 5),\n" +
    "(571, 'Paratinga', 5),\n" +
    "(572, 'Paripiranga', 5),\n" +
    "(573, 'Pau Brasil', 5),\n" +
    "(574, 'Paulo Afonso', 5),\n" +
    "(575, 'Pé de Serra', 5),\n" +
    "(576, 'Pedrão', 5),\n" +
    "(577, 'Pedro Alexandre', 5),\n" +
    "(578, 'Piatã', 5),\n" +
    "(579, 'Pilão Arcado', 5),\n" +
    "(580, 'Pindaí', 5),\n" +
    "(581, 'Pindobaçu', 5),\n" +
    "(582, 'Pintadas', 5),\n" +
    "(583, 'Piraí do Norte', 5),\n" +
    "(584, 'Piripá', 5),\n" +
    "(585, 'Piritiba', 5),\n" +
    "(586, 'Planaltino', 5),\n" +
    "(587, 'Planalto', 5),\n" +
    "(588, 'Poções', 5),\n" +
    "(589, 'Pojuca', 5),\n" +
    "(590, 'Ponto Novo', 5),\n" +
    "(591, 'Porto Seguro', 5),\n" +
    "(592, 'Potiraguá', 5),\n" +
    "(593, 'Prado', 5),\n" +
    "(594, 'Presidente Dutra', 5),\n" +
    "(595, 'Presidente Jânio Quadros', 5),\n" +
    "(596, 'Presidente Tancredo Neves', 5),\n" +
    "(597, 'Queimadas', 5),\n" +
    "(598, 'Quijingue', 5),\n" +
    "(599, 'Quixabeira', 5),\n" +
    "(600, 'Rafael Jambeiro', 5),\n" +
    "(601, 'Remanso', 5),\n" +
    "(602, 'Retirolândia', 5),\n" +
    "(603, 'Riachão das Neves', 5),\n" +
    "(604, 'Riachão do Jacuípe', 5),\n" +
    "(605, 'Riacho de Santana', 5),\n" +
    "(606, 'Ribeira do Amparo', 5),\n" +
    "(607, 'Ribeira do Pombal', 5),\n" +
    "(608, 'Ribeirão do Largo', 5),\n" +
    "(609, 'Rio de Contas', 5),\n" +
    "(610, 'Rio do Antônio', 5),\n" +
    "(611, 'Rio do Pires', 5),\n" +
    "(612, 'Rio Real', 5),\n" +
    "(613, 'Rodelas', 5),\n" +
    "(614, 'Ruy Barbosa', 5),\n" +
    "(615, 'Salinas da Margarida', 5),\n" +
    "(616, 'Salvador', 5),\n" +
    "(617, 'Santa Bárbara', 5),\n" +
    "(618, 'Santa Brígida', 5),\n" +
    "(619, 'Santa Cruz Cabrália', 5),\n" +
    "(620, 'Santa Cruz da Vitória', 5),\n" +
    "(621, 'Santa Inês', 5),\n" +
    "(622, 'Santa Luzia', 5),\n" +
    "(623, 'Santa Maria da Vitória', 5),\n" +
    "(624, 'Santa Rita de Cássia', 5),\n" +
    "(625, 'Santa Teresinha', 5),\n" +
    "(626, 'Santaluz', 5),\n" +
    "(627, 'Santana', 5),\n" +
    "(628, 'Santanópolis', 5),\n" +
    "(629, 'Santo Amaro', 5),\n" +
    "(630, 'Santo Antônio de Jesus', 5),\n" +
    "(631, 'Santo Estêvão', 5),\n" +
    "(632, 'São Desidério', 5),\n" +
    "(633, 'São Domingos', 5),\n" +
    "(634, 'São Felipe', 5),\n" +
    "(635, 'São Félix', 5),\n" +
    "(636, 'São Félix do Coribe', 5),\n" +
    "(637, 'São Francisco do Conde', 5),\n" +
    "(638, 'São Gabriel', 5),\n" +
    "(639, 'São Gonçalo dos Campos', 5),\n" +
    "(640, 'São José da Vitória', 5),\n" +
    "(641, 'São José do Jacuípe', 5),\n" +
    "(642, 'São Miguel das Matas', 5),\n" +
    "(643, 'São Sebastião do Passé', 5),\n" +
    "(644, 'Sapeaçu', 5),\n" +
    "(645, 'Sátiro Dias', 5),\n" +
    "(646, 'Saubara', 5),\n" +
    "(647, 'Saúde', 5),\n" +
    "(648, 'Seabra', 5),\n" +
    "(649, 'Sebastião Laranjeiras', 5),\n" +
    "(650, 'Senhor do Bonfim', 5),\n" +
    "(651, 'Sento Sé', 5),\n" +
    "(652, 'Serra do Ramalho', 5),\n" +
    "(653, 'Serra Dourada', 5),\n" +
    "(654, 'Serra Preta', 5),\n" +
    "(655, 'Serrinha', 5),\n" +
    "(656, 'Serrolândia', 5),\n" +
    "(657, 'Simões Filho', 5),\n" +
    "(658, 'Sítio do Mato', 5),\n" +
    "(659, 'Sítio do Quinto', 5),\n" +
    "(660, 'Sobradinho', 5),\n" +
    "(661, 'Souto Soares', 5),\n" +
    "(662, 'Tabocas do Brejo Velho', 5),\n" +
    "(663, 'Tanhaçu', 5),\n" +
    "(664, 'Tanque Novo', 5),\n" +
    "(665, 'Tanquinho', 5),\n" +
    "(666, 'Taperoá', 5),\n" +
    "(667, 'Tapiramutá', 5),\n" +
    "(668, 'Teixeira de Freitas', 5),\n" +
    "(669, 'Teodoro Sampaio', 5),\n" +
    "(670, 'Teofilândia', 5),\n" +
    "(671, 'Teolândia', 5),\n" +
    "(672, 'Terra Nova', 5),\n" +
    "(673, 'Tremedal', 5),\n" +
    "(674, 'Tucano', 5),\n" +
    "(675, 'Uauá', 5),\n" +
    "(676, 'Ubaíra', 5),\n" +
    "(677, 'Ubaitaba', 5),\n" +
    "(678, 'Ubatã', 5),\n" +
    "(679, 'Uibaí', 5),\n" +
    "(680, 'Umburanas', 5),\n" +
    "(681, 'Una', 5),\n" +
    "(682, 'Urandi', 5),\n" +
    "(683, 'Uruçuca', 5),\n" +
    "(684, 'Utinga', 5),\n" +
    "(685, 'Valença', 5),\n" +
    "(686, 'Valente', 5),\n" +
    "(687, 'Várzea da Roça', 5),\n" +
    "(688, 'Várzea do Poço', 5),\n" +
    "(689, 'Várzea Nova', 5),\n" +
    "(690, 'Varzedo', 5),\n" +
    "(691, 'Vera Cruz', 5),\n" +
    "(692, 'Vereda', 5),\n" +
    "(693, 'Vitória da Conquista', 5),\n" +
    "(694, 'Wagner', 5),\n" +
    "(695, 'Wanderley', 5),\n" +
    "(696, 'Wenceslau Guimarães', 5),\n" +
    "(697, 'Xique-Xique', 5),\n" +
    "(698, 'Abaiara', 6),\n" +
    "(699, 'Acarape', 6),\n" +
    "(700, 'Acaraú', 6),\n" +
    "(701, 'Acopiara', 6),\n" +
    "(702, 'Aiuaba', 6),\n" +
    "(703, 'Alcântaras', 6),\n" +
    "(704, 'Altaneira', 6),\n" +
    "(705, 'Alto Santo', 6),\n" +
    "(706, 'Amontada', 6),\n" +
    "(707, 'Antonina do Norte', 6),\n" +
    "(708, 'Apuiarés', 6),\n" +
    "(709, 'Aquiraz', 6),\n" +
    "(710, 'Aracati', 6),\n" +
    "(711, 'Aracoiaba', 6),\n" +
    "(712, 'Ararendá', 6),\n" +
    "(713, 'Araripe', 6),\n" +
    "(714, 'Aratuba', 6),\n" +
    "(715, 'Arneiroz', 6),\n" +
    "(716, 'Assaré', 6),\n" +
    "(717, 'Aurora', 6),\n" +
    "(718, 'Baixio', 6),\n" +
    "(719, 'Banabuiú', 6),\n" +
    "(720, 'Barbalha', 6),\n" +
    "(721, 'Barreira', 6),\n" +
    "(722, 'Barro', 6),\n" +
    "(723, 'Barroquinha', 6),\n" +
    "(724, 'Baturité', 6),\n" +
    "(725, 'Beberibe', 6),\n" +
    "(726, 'Bela Cruz', 6),\n" +
    "(727, 'Boa Viagem', 6),\n" +
    "(728, 'Brejo Santo', 6),\n" +
    "(729, 'Camocim', 6),\n" +
    "(730, 'Campos Sales', 6),\n" +
    "(731, 'Canindé', 6),\n" +
    "(732, 'Capistrano', 6),\n" +
    "(733, 'Caridade', 6),\n" +
    "(734, 'Cariré', 6),\n" +
    "(735, 'Caririaçu', 6),\n" +
    "(736, 'Cariús', 6),\n" +
    "(737, 'Carnaubal', 6),\n" +
    "(738, 'Cascavel', 6),\n" +
    "(739, 'Catarina', 6),\n" +
    "(740, 'Catunda', 6),\n" +
    "(741, 'Caucaia', 6),\n" +
    "(742, 'Cedro', 6),\n" +
    "(743, 'Chaval', 6),\n" +
    "(744, 'Choró', 6),\n" +
    "(745, 'Chorozinho', 6),\n" +
    "(746, 'Coreaú', 6),\n" +
    "(747, 'Crateús', 6),\n" +
    "(748, 'Crato', 6),\n" +
    "(749, 'Croatá', 6),\n" +
    "(750, 'Cruz', 6),\n" +
    "(751, 'Deputado Irapuan Pinheiro', 6),\n" +
    "(752, 'Ererê', 6),\n" +
    "(753, 'Eusébio', 6),\n" +
    "(754, 'Farias Brito', 6),\n" +
    "(755, 'Forquilha', 6),\n" +
    "(756, 'Fortaleza', 6),\n" +
    "(757, 'Fortim', 6),\n" +
    "(758, 'Frecheirinha', 6),\n" +
    "(759, 'General Sampaio', 6),\n" +
    "(760, 'Graça', 6),\n" +
    "(761, 'Granja', 6),\n" +
    "(762, 'Granjeiro', 6),\n" +
    "(763, 'Groaíras', 6),\n" +
    "(764, 'Guaiúba', 6),\n" +
    "(765, 'Guaraciaba do Norte', 6),\n" +
    "(766, 'Guaramiranga', 6),\n" +
    "(767, 'Hidrolândia', 6),\n" +
    "(768, 'Horizonte', 6),\n" +
    "(769, 'Ibaretama', 6),\n" +
    "(770, 'Ibiapina', 6),\n" +
    "(771, 'Ibicuitinga', 6),\n" +
    "(772, 'Icapuí', 6),\n" +
    "(773, 'Icó', 6),\n" +
    "(774, 'Iguatu', 6),\n" +
    "(775, 'Independência', 6),\n" +
    "(776, 'Ipaporanga', 6),\n" +
    "(777, 'Ipaumirim', 6),\n" +
    "(778, 'Ipu', 6),\n" +
    "(779, 'Ipueiras', 6),\n" +
    "(780, 'Iracema', 6),\n" +
    "(781, 'Irauçuba', 6),\n" +
    "(782, 'Itaiçaba', 6),\n" +
    "(783, 'Itaitinga', 6),\n" +
    "(784, 'Itapagé', 6),\n" +
    "(785, 'Itapipoca', 6),\n" +
    "(786, 'Itapiúna', 6),\n" +
    "(787, 'Itarema', 6),\n" +
    "(788, 'Itatira', 6),\n" +
    "(789, 'Jaguaretama', 6),\n" +
    "(790, 'Jaguaribara', 6),\n" +
    "(791, 'Jaguaribe', 6),\n" +
    "(792, 'Jaguaruana', 6),\n" +
    "(793, 'Jardim', 6),\n" +
    "(794, 'Jati', 6),\n" +
    "(795, 'Jijoca de Jericoacoara', 6),\n" +
    "(796, 'Juazeiro do Norte', 6),\n" +
    "(797, 'Jucás', 6),\n" +
    "(798, 'Lavras da Mangabeira', 6),\n" +
    "(799, 'Limoeiro do Norte', 6),\n" +
    "(800, 'Madalena', 6),\n" +
    "(801, 'Maracanaú', 6),\n" +
    "(802, 'Maranguape', 6),\n" +
    "(803, 'Marco', 6),\n" +
    "(804, 'Martinópole', 6),\n" +
    "(805, 'Massapê', 6),\n" +
    "(806, 'Mauriti', 6),\n" +
    "(807, 'Meruoca', 6),\n" +
    "(808, 'Milagres', 6),\n" +
    "(809, 'Milhã', 6),\n" +
    "(810, 'Miraíma', 6),\n" +
    "(811, 'Missão Velha', 6),\n" +
    "(812, 'Mombaça', 6),\n" +
    "(813, 'Monsenhor Tabosa', 6),\n" +
    "(814, 'Morada Nova', 6),\n" +
    "(815, 'Moraújo', 6),\n" +
    "(816, 'Morrinhos', 6),\n" +
    "(817, 'Mucambo', 6),\n" +
    "(818, 'Mulungu', 6),\n" +
    "(819, 'Nova Olinda', 6),\n" +
    "(820, 'Nova Russas', 6),\n" +
    "(821, 'Novo Oriente', 6),\n" +
    "(822, 'Ocara', 6),\n" +
    "(823, 'Orós', 6),\n" +
    "(824, 'Pacajus', 6),\n" +
    "(825, 'Pacatuba', 6),\n" +
    "(826, 'Pacoti', 6),\n" +
    "(827, 'Pacujá', 6),\n" +
    "(828, 'Palhano', 6),\n" +
    "(829, 'Palmácia', 6),\n" +
    "(830, 'Paracuru', 6),\n" +
    "(831, 'Paraipaba', 6),\n" +
    "(832, 'Parambu', 6),\n" +
    "(833, 'Paramoti', 6),\n" +
    "(834, 'Pedra Branca', 6),\n" +
    "(835, 'Penaforte', 6),\n" +
    "(836, 'Pentecoste', 6),\n" +
    "(837, 'Pereiro', 6),\n" +
    "(838, 'Pindoretama', 6),\n" +
    "(839, 'Piquet Carneiro', 6),\n" +
    "(840, 'Pires Ferreira', 6),\n" +
    "(841, 'Poranga', 6),\n" +
    "(842, 'Porteiras', 6),\n" +
    "(843, 'Potengi', 6),\n" +
    "(844, 'Potiretama', 6),\n" +
    "(845, 'Quiterianópolis', 6),\n" +
    "(846, 'Quixadá', 6),\n" +
    "(847, 'Quixelô', 6),\n" +
    "(848, 'Quixeramobim', 6),\n" +
    "(849, 'Quixeré', 6),\n" +
    "(850, 'Redenção', 6),\n" +
    "(851, 'Reriutaba', 6),\n" +
    "(852, 'Russas', 6),\n" +
    "(853, 'Saboeiro', 6),\n" +
    "(854, 'Salitre', 6),\n" +
    "(855, 'Santa Quitéria', 6),\n" +
    "(856, 'Santana do Acaraú', 6),\n" +
    "(857, 'Santana do Cariri', 6),\n" +
    "(858, 'São Benedito', 6),\n" +
    "(859, 'São Gonçalo do Amarante', 6),\n" +
    "(860, 'São João do Jaguaribe', 6),\n" +
    "(861, 'São Luís do Curu', 6),\n" +
    "(862, 'Senador Pompeu', 6),\n" +
    "(863, 'Senador Sá', 6),\n" +
    "(864, 'Sobral', 6),\n" +
    "(865, 'Solonópole', 6),\n" +
    "(866, 'Tabuleiro do Norte', 6),\n" +
    "(867, 'Tamboril', 6),\n" +
    "(868, 'Tarrafas', 6),\n" +
    "(869, 'Tauá', 6),\n" +
    "(870, 'Tejuçuoca', 6),\n" +
    "(871, 'Tianguá', 6),\n" +
    "(872, 'Trairi', 6),\n" +
    "(873, 'Tururu', 6),\n" +
    "(874, 'Ubajara', 6),\n" +
    "(875, 'Umari', 6),\n" +
    "(876, 'Umirim', 6),\n" +
    "(877, 'Uruburetama', 6),\n" +
    "(878, 'Uruoca', 6),\n" +
    "(879, 'Varjota', 6),\n" +
    "(880, 'Várzea Alegre', 6),\n" +
    "(881, 'Viçosa do Ceará', 6),\n" +
    "(882, 'Brasília', 7),\n" +
    "(883, 'Abadia de Goiás', 9),\n" +
    "(884, 'Abadiânia', 9),\n" +
    "(885, 'Acreúna', 9),\n" +
    "(886, 'Adelândia', 9),\n" +
    "(887, 'Água Fria de Goiás', 9),\n" +
    "(888, 'Água Limpa', 9),\n" +
    "(889, 'Águas Lindas de Goiás', 9),\n" +
    "(890, 'Alexânia', 9),\n" +
    "(891, 'Aloândia', 9),\n" +
    "(892, 'Alto Horizonte', 9),\n" +
    "(893, 'Alto Paraíso de Goiás', 9),\n" +
    "(894, 'Alvorada do Norte', 9),\n" +
    "(895, 'Amaralina', 9),\n" +
    "(896, 'Americano do Brasil', 9),\n" +
    "(897, 'Amorinópolis', 9),\n" +
    "(898, 'Anápolis', 9),\n" +
    "(899, 'Anhanguera', 9),\n" +
    "(900, 'Anicuns', 9),\n" +
    "(901, 'Aparecida de Goiânia', 9),\n" +
    "(902, 'Aparecida do Rio Doce', 9),\n" +
    "(903, 'Aporé', 9),\n" +
    "(904, 'Araçu', 9),\n" +
    "(905, 'Aragarças', 9),\n" +
    "(906, 'Aragoiânia', 9),\n" +
    "(907, 'Araguapaz', 9),\n" +
    "(908, 'Arenópolis', 9),\n" +
    "(909, 'Aruanã', 9),\n" +
    "(910, 'Aurilândia', 9),\n" +
    "(911, 'Avelinópolis', 9),\n" +
    "(912, 'Baliza', 9),\n" +
    "(913, 'Barro Alto', 9),\n" +
    "(914, 'Bela Vista de Goiás', 9),\n" +
    "(915, 'Bom Jardim de Goiás', 9),\n" +
    "(916, 'Bom Jesus de Goiás', 9),\n" +
    "(917, 'Bonfinópolis', 9),\n" +
    "(918, 'Bonópolis', 9),\n" +
    "(919, 'Brazabrantes', 9),\n" +
    "(920, 'Britânia', 9),\n" +
    "(921, 'Buriti Alegre', 9),\n" +
    "(922, 'Buriti de Goiás', 9),\n" +
    "(923, 'Buritinópolis', 9),\n" +
    "(924, 'Cabeceiras', 9),\n" +
    "(925, 'Cachoeira Alta', 9),\n" +
    "(926, 'Cachoeira de Goiás', 9),\n" +
    "(927, 'Cachoeira Dourada', 9),\n" +
    "(928, 'Caçu', 9),\n" +
    "(929, 'Caiapônia', 9),\n" +
    "(930, 'Caldas Novas', 9),\n" +
    "(931, 'Caldazinha', 9),\n" +
    "(932, 'Campestre de Goiás', 9),\n" +
    "(933, 'Campinaçu', 9),\n" +
    "(934, 'Campinorte', 9),\n" +
    "(935, 'Campo Alegre de Goiás', 9),\n" +
    "(936, 'Campo Limpo de Goiás', 9),\n" +
    "(937, 'Campos Belos', 9),\n" +
    "(938, 'Campos Verdes', 9),\n" +
    "(939, 'Carmo do Rio Verde', 9),\n" +
    "(940, 'Castelândia', 9),\n" +
    "(941, 'Catalão', 9),\n" +
    "(942, 'Caturaí', 9),\n" +
    "(943, 'Cavalcante', 9),\n" +
    "(944, 'Ceres', 9),\n" +
    "(945, 'Cezarina', 9),\n" +
    "(946, 'Chapadão do Céu', 9),\n" +
    "(947, 'Cidade Ocidental', 9),\n" +
    "(948, 'Cocalzinho de Goiás', 9),\n" +
    "(949, 'Colinas do Sul', 9),\n" +
    "(950, 'Córrego do Ouro', 9),\n" +
    "(951, 'Corumbá de Goiás', 9),\n" +
    "(952, 'Corumbaíba', 9),\n" +
    "(953, 'Cristalina', 9),\n" +
    "(954, 'Cristianópolis', 9),\n" +
    "(955, 'Crixás', 9),\n" +
    "(956, 'Cromínia', 9),\n" +
    "(957, 'Cumari', 9),\n" +
    "(958, 'Damianópolis', 9),\n" +
    "(959, 'Damolândia', 9),\n" +
    "(960, 'Davinópolis', 9),\n" +
    "(961, 'Diorama', 9),\n" +
    "(962, 'Divinópolis de Goiás', 9),\n" +
    "(963, 'Doverlândia', 9),\n" +
    "(964, 'Edealina', 9),\n" +
    "(965, 'Edéia', 9),\n" +
    "(966, 'Estrela do Norte', 9),\n" +
    "(967, 'Faina', 9),\n" +
    "(968, 'Fazenda Nova', 9),\n" +
    "(969, 'Firminópolis', 9),\n" +
    "(970, 'Flores de Goiás', 9),\n" +
    "(971, 'Formosa', 9),\n" +
    "(972, 'Formoso', 9),\n" +
    "(973, 'Gameleira de Goiás', 9),\n" +
    "(974, 'Goianápolis', 9),\n" +
    "(975, 'Goiandira', 9),\n" +
    "(976, 'Goianésia', 9),\n" +
    "(977, 'Goiânia', 9),\n" +
    "(978, 'Goianira', 9),\n" +
    "(979, 'Goiás', 9),\n" +
    "(980, 'Goiatuba', 9),\n" +
    "(981, 'Gouvelândia', 9),\n" +
    "(982, 'Guapó', 9),\n" +
    "(983, 'Guaraíta', 9),\n" +
    "(984, 'Guarani de Goiás', 9),\n" +
    "(985, 'Guarinos', 9),\n" +
    "(986, 'Heitoraí', 9),\n" +
    "(987, 'Hidrolândia', 9),\n" +
    "(988, 'Hidrolina', 9),\n" +
    "(989, 'Iaciara', 9),\n" +
    "(990, 'Inaciolândia', 9),\n" +
    "(991, 'Indiara', 9),\n" +
    "(992, 'Inhumas', 9),\n" +
    "(993, 'Ipameri', 9),\n" +
    "(994, 'Ipiranga de Goiás', 9),\n" +
    "(995, 'Iporá', 9),\n" +
    "(996, 'Israelândia', 9),\n" +
    "(997, 'Itaberaí', 9),\n" +
    "(998, 'Itaguari', 9),\n" +
    "(999, 'Itaguaru', 9),\n" +
    "(1000, 'Itajá', 9),\n" +
    "(1001, 'Itapaci', 9),\n" +
    "(1002, 'Itapirapuã', 9),\n" +
    "(1003, 'Itapuranga', 9),\n" +
    "(1004, 'Itarumã', 9),\n" +
    "(1005, 'Itauçu', 9),\n" +
    "(1006, 'Itumbiara', 9);";

const sql3 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(1007, 'Ivolândia', 9),\n" +
    "(1008, 'Jandaia', 9),\n" +
    "(1009, 'Jaraguá', 9),\n" +
    "(1010, 'Jataí', 9),\n" +
    "(1011, 'Jaupaci', 9),\n" +
    "(1012, 'Jesúpolis', 9),\n" +
    "(1013, 'Joviânia', 9),\n" +
    "(1014, 'Jussara', 9),\n" +
    "(1015, 'Lagoa Santa', 9),\n" +
    "(1016, 'Leopoldo de Bulhões', 9),\n" +
    "(1017, 'Luziânia', 9),\n" +
    "(1018, 'Mairipotaba', 9),\n" +
    "(1019, 'Mambaí', 9),\n" +
    "(1020, 'Mara Rosa', 9),\n" +
    "(1021, 'Marzagão', 9),\n" +
    "(1022, 'Matrinchã', 9),\n" +
    "(1023, 'Maurilândia', 9),\n" +
    "(1024, 'Mimoso de Goiás', 9),\n" +
    "(1025, 'Minaçu', 9),\n" +
    "(1026, 'Mineiros', 9),\n" +
    "(1027, 'Moiporá', 9),\n" +
    "(1028, 'Monte Alegre de Goiás', 9),\n" +
    "(1029, 'Montes Claros de Goiás', 9),\n" +
    "(1030, 'Montividiu', 9),\n" +
    "(1031, 'Montividiu do Norte', 9),\n" +
    "(1032, 'Morrinhos', 9),\n" +
    "(1033, 'Morro Agudo de Goiás', 9),\n" +
    "(1034, 'Mossâmedes', 9),\n" +
    "(1035, 'Mozarlândia', 9),\n" +
    "(1036, 'Mundo Novo', 9),\n" +
    "(1037, 'Mutunópolis', 9),\n" +
    "(1038, 'Nazário', 9),\n" +
    "(1039, 'Nerópolis', 9),\n" +
    "(1040, 'Niquelândia', 9),\n" +
    "(1041, 'Nova América', 9),\n" +
    "(1042, 'Nova Aurora', 9),\n" +
    "(1043, 'Nova Crixás', 9),\n" +
    "(1044, 'Nova Glória', 9),\n" +
    "(1045, 'Nova Iguaçu de Goiás', 9),\n" +
    "(1046, 'Nova Roma', 9),\n" +
    "(1047, 'Nova Veneza', 9),\n" +
    "(1048, 'Novo Brasil', 9),\n" +
    "(1049, 'Novo Gama', 9),\n" +
    "(1050, 'Novo Planalto', 9),\n" +
    "(1051, 'Orizona', 9),\n" +
    "(1052, 'Ouro Verde de Goiás', 9),\n" +
    "(1053, 'Ouvidor', 9),\n" +
    "(1054, 'Padre Bernardo', 9),\n" +
    "(1055, 'Palestina de Goiás', 9),\n" +
    "(1056, 'Palmeiras de Goiás', 9),\n" +
    "(1057, 'Palmelo', 9),\n" +
    "(1058, 'Palminópolis', 9),\n" +
    "(1059, 'Panamá', 9),\n" +
    "(1060, 'Paranaiguara', 9),\n" +
    "(1061, 'Paraúna', 9),\n" +
    "(1062, 'Perolândia', 9),\n" +
    "(1063, 'Petrolina de Goiás', 9),\n" +
    "(1064, 'Pilar de Goiás', 9),\n" +
    "(1065, 'Piracanjuba', 9),\n" +
    "(1066, 'Piranhas', 9),\n" +
    "(1067, 'Pirenópolis', 9),\n" +
    "(1068, 'Pires do Rio', 9),\n" +
    "(1069, 'Planaltina', 9),\n" +
    "(1070, 'Pontalina', 9),\n" +
    "(1071, 'Porangatu', 9),\n" +
    "(1072, 'Porteirão', 9),\n" +
    "(1073, 'Portelândia', 9),\n" +
    "(1074, 'Posse', 9),\n" +
    "(1075, 'Professor Jamil', 9),\n" +
    "(1076, 'Quirinópolis', 9),\n" +
    "(1077, 'Rialma', 9),\n" +
    "(1078, 'Rianápolis', 9),\n" +
    "(1079, 'Rio Quente', 9),\n" +
    "(1080, 'Rio Verde', 9),\n" +
    "(1081, 'Rubiataba', 9),\n" +
    "(1082, 'Sanclerlândia', 9),\n" +
    "(1083, 'Santa Bárbara de Goiás', 9),\n" +
    "(1084, 'Santa Cruz de Goiás', 9),\n" +
    "(1085, 'Santa Fé de Goiás', 9),\n" +
    "(1086, 'Santa Helena de Goiás', 9),\n" +
    "(1087, 'Santa Isabel', 9),\n" +
    "(1088, 'Santa Rita do Araguaia', 9),\n" +
    "(1089, 'Santa Rita do Novo Destino', 9),\n" +
    "(1090, 'Santa Rosa de Goiás', 9),\n" +
    "(1091, 'Santa Tereza de Goiás', 9),\n" +
    "(1092, 'Santa Terezinha de Goiás', 9),\n" +
    "(1093, 'Santo Antônio da Barra', 9),\n" +
    "(1094, 'Santo Antônio de Goiás', 9),\n" +
    "(1095, 'Santo Antônio do Descoberto', 9),\n" +
    "(1096, 'São Domingos', 9),\n" +
    "(1097, 'São Francisco de Goiás', 9),\n" +
    "(1098, 'São João dAliança', 9),\n" +
    "(1099, 'São João da Paraúna', 9),\n" +
    "(1100, 'São Luís de Montes Belos', 9),\n" +
    "(1101, 'São Luíz do Norte', 9),\n" +
    "(1102, 'São Miguel do Araguaia', 9),\n" +
    "(1103, 'São Miguel do Passa Quatro', 9),\n" +
    "(1104, 'São Patrício', 9),\n" +
    "(1105, 'São Simão', 9),\n" +
    "(1106, 'Senador Canedo', 9),\n" +
    "(1107, 'Serranópolis', 9),\n" +
    "(1108, 'Silvânia', 9),\n" +
    "(1109, 'Simolândia', 9),\n" +
    "(1110, 'Sítio dAbadia', 9),\n" +
    "(1111, 'Taquaral de Goiás', 9),\n" +
    "(1112, 'Teresina de Goiás', 9),\n" +
    "(1113, 'Terezópolis de Goiás', 9),\n" +
    "(1114, 'Três Ranchos', 9),\n" +
    "(1115, 'Trindade', 9),\n" +
    "(1116, 'Trombas', 9),\n" +
    "(1117, 'Turvânia', 9),\n" +
    "(1118, 'Turvelândia', 9),\n" +
    "(1119, 'Uirapuru', 9),\n" +
    "(1120, 'Uruaçu', 9),\n" +
    "(1121, 'Uruana', 9),\n" +
    "(1122, 'Urutaí', 9),\n" +
    "(1123, 'Valparaíso de Goiás', 9),\n" +
    "(1124, 'Varjão', 9),\n" +
    "(1125, 'Vianópolis', 9),\n" +
    "(1126, 'Vicentinópolis', 9),\n" +
    "(1127, 'Vila Boa', 9),\n" +
    "(1128, 'Vila Propício', 9),\n" +
    "(1129, 'Açailândia', 10),\n" +
    "(1130, 'Afonso Cunha', 10),\n" +
    "(1131, 'Água Doce do Maranhão', 10),\n" +
    "(1132, 'Alcântara', 10),\n" +
    "(1133, 'Aldeias Altas', 10),\n" +
    "(1134, 'Altamira do Maranhão', 10),\n" +
    "(1135, 'Alto Alegre do Maranhão', 10),\n" +
    "(1136, 'Alto Alegre do Pindaré', 10),\n" +
    "(1137, 'Alto Parnaíba', 10),\n" +
    "(1138, 'Amapá do Maranhão', 10),\n" +
    "(1139, 'Amarante do Maranhão', 10),\n" +
    "(1140, 'Anajatuba', 10),\n" +
    "(1141, 'Anapurus', 10),\n" +
    "(1142, 'Apicum-Açu', 10),\n" +
    "(1143, 'Araguanã', 10),\n" +
    "(1144, 'Araioses', 10),\n" +
    "(1145, 'Arame', 10),\n" +
    "(1146, 'Arari', 10),\n" +
    "(1147, 'Axixá', 10),\n" +
    "(1148, 'Bacabal', 10),\n" +
    "(1149, 'Bacabeira', 10),\n" +
    "(1150, 'Bacuri', 10),\n" +
    "(1151, 'Bacurituba', 10),\n" +
    "(1152, 'Balsas', 10),\n" +
    "(1153, 'Barão de Grajaú', 10),\n" +
    "(1154, 'Barra do Corda', 10),\n" +
    "(1155, 'Barreirinhas', 10),\n" +
    "(1156, 'Bela Vista do Maranhão', 10),\n" +
    "(1157, 'Belágua', 10),\n" +
    "(1158, 'Benedito Leite', 10),\n" +
    "(1159, 'Bequimão', 10),\n" +
    "(1160, 'Bernardo do Mearim', 10),\n" +
    "(1161, 'Boa Vista do Gurupi', 10),\n" +
    "(1162, 'Bom Jardim', 10),\n" +
    "(1163, 'Bom Jesus das Selvas', 10),\n" +
    "(1164, 'Bom Lugar', 10),\n" +
    "(1165, 'Brejo', 10),\n" +
    "(1166, 'Brejo de Areia', 10),\n" +
    "(1167, 'Buriti', 10),\n" +
    "(1168, 'Buriti Bravo', 10),\n" +
    "(1169, 'Buriticupu', 10),\n" +
    "(1170, 'Buritirana', 10),\n" +
    "(1171, 'Cachoeira Grande', 10),\n" +
    "(1172, 'Cajapió', 10),\n" +
    "(1173, 'Cajari', 10),\n" +
    "(1174, 'Campestre do Maranhão', 10),\n" +
    "(1175, 'Cândido Mendes', 10),\n" +
    "(1176, 'Cantanhede', 10),\n" +
    "(1177, 'Capinzal do Norte', 10),\n" +
    "(1178, 'Carolina', 10),\n" +
    "(1179, 'Carutapera', 10),\n" +
    "(1180, 'Caxias', 10),\n" +
    "(1181, 'Cedral', 10),\n" +
    "(1182, 'Central do Maranhão', 10),\n" +
    "(1183, 'Centro do Guilherme', 10),\n" +
    "(1184, 'Centro Novo do Maranhão', 10),\n" +
    "(1185, 'Chapadinha', 10),\n" +
    "(1186, 'Cidelândia', 10),\n" +
    "(1187, 'Codó', 10),\n" +
    "(1188, 'Coelho Neto', 10),\n" +
    "(1189, 'Colinas', 10),\n" +
    "(1190, 'Conceição do Lago-Açu', 10),\n" +
    "(1191, 'Coroatá', 10),\n" +
    "(1192, 'Cururupu', 10),\n" +
    "(1193, 'Davinópolis', 10),\n" +
    "(1194, 'Dom Pedro', 10),\n" +
    "(1195, 'Duque Bacelar', 10),\n" +
    "(1196, 'Esperantinópolis', 10),\n" +
    "(1197, 'Estreito', 10),\n" +
    "(1198, 'Feira Nova do Maranhão', 10),\n" +
    "(1199, 'Fernando Falcão', 10),\n" +
    "(1200, 'Formosa da Serra Negra', 10),\n" +
    "(1201, 'Fortaleza dos Nogueiras', 10),\n" +
    "(1202, 'Fortuna', 10),\n" +
    "(1203, 'Godofredo Viana', 10),\n" +
    "(1204, 'Gonçalves Dias', 10),\n" +
    "(1205, 'Governador Archer', 10),\n" +
    "(1206, 'Governador Edison Lobão', 10),\n" +
    "(1207, 'Governador Eugênio Barros', 10),\n" +
    "(1208, 'Governador Luiz Rocha', 10),\n" +
    "(1209, 'Governador Newton Bello', 10),\n" +
    "(1210, 'Governador Nunes Freire', 10),\n" +
    "(1211, 'Graça Aranha', 10),\n" +
    "(1212, 'Grajaú', 10),\n" +
    "(1213, 'Guimarães', 10),\n" +
    "(1214, 'Humberto de Campos', 10),\n" +
    "(1215, 'Icatu', 10),\n" +
    "(1216, 'Igarapé do Meio', 10),\n" +
    "(1217, 'Igarapé Grande', 10),\n" +
    "(1218, 'Imperatriz', 10),\n" +
    "(1219, 'Itaipava do Grajaú', 10),\n" +
    "(1220, 'Itapecuru Mirim', 10),\n" +
    "(1221, 'Itinga do Maranhão', 10),\n" +
    "(1222, 'Jatobá', 10),\n" +
    "(1223, 'Jenipapo dos Vieiras', 10),\n" +
    "(1224, 'João Lisboa', 10),\n" +
    "(1225, 'Joselândia', 10),\n" +
    "(1226, 'Junco do Maranhão', 10),\n" +
    "(1227, 'Lago da Pedra', 10),\n" +
    "(1228, 'Lago do Junco', 10),\n" +
    "(1229, 'Lago dos Rodrigues', 10),\n" +
    "(1230, 'Lago Verde', 10),\n" +
    "(1231, 'Lagoa do Mato', 10),\n" +
    "(1232, 'Lagoa Grande do Maranhão', 10),\n" +
    "(1233, 'Lajeado Novo', 10),\n" +
    "(1234, 'Lima Campos', 10),\n" +
    "(1235, 'Loreto', 10),\n" +
    "(1236, 'Luís Domingues', 10),\n" +
    "(1237, 'Magalhães de Almeida', 10),\n" +
    "(1238, 'Maracaçumé', 10),\n" +
    "(1239, 'Marajá do Sena', 10),\n" +
    "(1240, 'Maranhãozinho', 10),\n" +
    "(1241, 'Mata Roma', 10),\n" +
    "(1242, 'Matinha', 10),\n" +
    "(1243, 'Matões', 10),\n" +
    "(1244, 'Matões do Norte', 10),\n" +
    "(1245, 'Milagres do Maranhão', 10),\n" +
    "(1246, 'Mirador', 10),\n" +
    "(1247, 'Miranda do Norte', 10),\n" +
    "(1248, 'Mirinzal', 10),\n" +
    "(1249, 'Monção', 10),\n" +
    "(1250, 'Montes Altos', 10),\n" +
    "(1251, 'Morros', 10),\n" +
    "(1252, 'Nina Rodrigues', 10),\n" +
    "(1253, 'Nova Colinas', 10),\n" +
    "(1254, 'Nova Iorque', 10),\n" +
    "(1255, 'Nova Olinda do Maranhão', 10),\n" +
    "(1256, 'Olho dÁgua das Cunhãs', 10),\n" +
    "(1257, 'Olinda Nova do Maranhão', 10),\n" +
    "(1258, 'Paço do Lumiar', 10),\n" +
    "(1259, 'Palmeirândia', 10),\n" +
    "(1260, 'Paraibano', 10),\n" +
    "(1261, 'Parnarama', 10),\n" +
    "(1262, 'Passagem Franca', 10),\n" +
    "(1263, 'Pastos Bons', 10),\n" +
    "(1264, 'Paulino Neves', 10),\n" +
    "(1265, 'Paulo Ramos', 10),\n" +
    "(1266, 'Pedreiras', 10),\n" +
    "(1267, 'Pedro do Rosário', 10),\n" +
    "(1268, 'Penalva', 10),\n" +
    "(1269, 'Peri Mirim', 10),\n" +
    "(1270, 'Peritoró', 10),\n" +
    "(1271, 'Pindaré-Mirim', 10),\n" +
    "(1272, 'Pinheiro', 10),\n" +
    "(1273, 'Pio XII', 10),\n" +
    "(1274, 'Pirapemas', 10),\n" +
    "(1275, 'Poção de Pedras', 10),\n" +
    "(1276, 'Porto Franco', 10),\n" +
    "(1277, 'Porto Rico do Maranhão', 10),\n" +
    "(1278, 'Presidente Dutra', 10),\n" +
    "(1279, 'Presidente Juscelino', 10),\n" +
    "(1280, 'Presidente Médici', 10),\n" +
    "(1281, 'Presidente Sarney', 10),\n" +
    "(1282, 'Presidente Vargas', 10),\n" +
    "(1283, 'Primeira Cruz', 10),\n" +
    "(1284, 'Raposa', 10),\n" +
    "(1285, 'Riachão', 10),\n" +
    "(1286, 'Ribamar Fiquene', 10),\n" +
    "(1287, 'Rosário', 10),\n" +
    "(1288, 'Sambaíba', 10),\n" +
    "(1289, 'Santa Filomena do Maranhão', 10),\n" +
    "(1290, 'Santa Helena', 10),\n" +
    "(1291, 'Santa Inês', 10),\n" +
    "(1292, 'Santa Luzia', 10),\n" +
    "(1293, 'Santa Luzia do Paruá', 10),\n" +
    "(1294, 'Santa Quitéria do Maranhão', 10),\n" +
    "(1295, 'Santa Rita', 10),\n" +
    "(1296, 'Santana do Maranhão', 10),\n" +
    "(1297, 'Santo Amaro do Maranhão', 10),\n" +
    "(1298, 'Santo Antônio dos Lopes', 10),\n" +
    "(1299, 'São Benedito do Rio Preto', 10),\n" +
    "(1300, 'São Bento', 10),\n" +
    "(1301, 'São Bernardo', 10),\n" +
    "(1302, 'São Domingos do Azeitão', 10),\n" +
    "(1303, 'São Domingos do Maranhão', 10),\n" +
    "(1304, 'São Félix de Balsas', 10),\n" +
    "(1305, 'São Francisco do Brejão', 10),\n" +
    "(1306, 'São Francisco do Maranhão', 10),\n" +
    "(1307, 'São João Batista', 10),\n" +
    "(1308, 'São João do Carú', 10),\n" +
    "(1309, 'São João do Paraíso', 10),\n" +
    "(1310, 'São João do Soter', 10),\n" +
    "(1311, 'São João dos Patos', 10),\n" +
    "(1312, 'São José de Ribamar', 10),\n" +
    "(1313, 'São José dos Basílios', 10),\n" +
    "(1314, 'São Luís', 10),\n" +
    "(1315, 'São Luís Gonzaga do Maranhão', 10),\n" +
    "(1316, 'São Mateus do Maranhão', 10),\n" +
    "(1317, 'São Pedro da Água Branca', 10),\n" +
    "(1318, 'São Pedro dos Crentes', 10),\n" +
    "(1319, 'São Raimundo das Mangabeiras', 10),\n" +
    "(1320, 'São Raimundo do Doca Bezerra', 10),\n" +
    "(1321, 'São Roberto', 10),\n" +
    "(1322, 'São Vicente Ferrer', 10),\n" +
    "(1323, 'Satubinha', 10),\n" +
    "(1324, 'Senador Alexandre Costa', 10),\n" +
    "(1325, 'Senador La Rocque', 10),\n" +
    "(1326, 'Serrano do Maranhão', 10),\n" +
    "(1327, 'Sítio Novo', 10),\n" +
    "(1328, 'Sucupira do Norte', 10),\n" +
    "(1329, 'Sucupira do Riachão', 10),\n" +
    "(1330, 'Tasso Fragoso', 10),\n" +
    "(1331, 'Timbiras', 10),\n" +
    "(1332, 'Timon', 10),\n" +
    "(1333, 'Trizidela do Vale', 10),\n" +
    "(1334, 'Tufilândia', 10),\n" +
    "(1335, 'Tuntum', 10),\n" +
    "(1336, 'Turiaçu', 10),\n" +
    "(1337, 'Turilândia', 10),\n" +
    "(1338, 'Tutóia', 10),\n" +
    "(1339, 'Urbano Santos', 10),\n" +
    "(1340, 'Vargem Grande', 10),\n" +
    "(1341, 'Viana', 10),\n" +
    "(1342, 'Vila Nova dos Martírios', 10),\n" +
    "(1343, 'Vitória do Mearim', 10),\n" +
    "(1344, 'Vitorino Freire', 10),\n" +
    "(1345, 'Zé Doca', 10),\n" +
    "(1346, 'Acorizal', 13),\n" +
    "(1347, 'Água Boa', 13),\n" +
    "(1348, 'Alta Floresta', 13),\n" +
    "(1349, 'Alto Araguaia', 13),\n" +
    "(1350, 'Alto Boa Vista', 13),\n" +
    "(1351, 'Alto Garças', 13),\n" +
    "(1352, 'Alto Paraguai', 13),\n" +
    "(1353, 'Alto Taquari', 13),\n" +
    "(1354, 'Apiacás', 13),\n" +
    "(1355, 'Araguaiana', 13),\n" +
    "(1356, 'Araguainha', 13),\n" +
    "(1357, 'Araputanga', 13),\n" +
    "(1358, 'Arenápolis', 13),\n" +
    "(1359, 'Aripuanã', 13),\n" +
    "(1360, 'Barão de Melgaço', 13),\n" +
    "(1361, 'Barra do Bugres', 13),\n" +
    "(1362, 'Barra do Garças', 13),\n" +
    "(1363, 'Bom Jesus do Araguaia', 13),\n" +
    "(1364, 'Brasnorte', 13),\n" +
    "(1365, 'Cáceres', 13),\n" +
    "(1366, 'Campinápolis', 13),\n" +
    "(1367, 'Campo Novo do Parecis', 13),\n" +
    "(1368, 'Campo Verde', 13),\n" +
    "(1369, 'Campos de Júlio', 13),\n" +
    "(1370, 'Canabrava do Norte', 13),\n" +
    "(1371, 'Canarana', 13),\n" +
    "(1372, 'Carlinda', 13),\n" +
    "(1373, 'Castanheira', 13),\n" +
    "(1374, 'Chapada dos Guimarães', 13),\n" +
    "(1375, 'Cláudia', 13),\n" +
    "(1376, 'Cocalinho', 13),\n" +
    "(1377, 'Colíder', 13),\n" +
    "(1378, 'Colniza', 13),\n" +
    "(1379, 'Comodoro', 13),\n" +
    "(1380, 'Confresa', 13),\n" +
    "(1381, 'Conquista dOeste', 13),\n" +
    "(1382, 'Cotriguaçu', 13),\n" +
    "(1383, 'Cuiabá', 13),\n" +
    "(1384, 'Curvelândia', 13),\n" +
    "(1385, 'Curvelândia', 13),\n" +
    "(1386, 'Denise', 13),\n" +
    "(1387, 'Diamantino', 13),\n" +
    "(1388, 'Dom Aquino', 13),\n" +
    "(1389, 'Feliz Natal', 13),\n" +
    "(1390, 'Figueirópolis dOeste', 13),\n" +
    "(1391, 'Gaúcha do Norte', 13),\n" +
    "(1392, 'General Carneiro', 13),\n" +
    "(1393, 'Glória dOeste', 13),\n" +
    "(1394, 'Guarantã do Norte', 13),\n" +
    "(1395, 'Guiratinga', 13),\n" +
    "(1396, 'Indiavaí', 13),\n" +
    "(1397, 'Ipiranga do Norte', 13),\n" +
    "(1398, 'Itanhangá', 13),\n" +
    "(1399, 'Itaúba', 13),\n" +
    "(1400, 'Itiquira', 13),\n" +
    "(1401, 'Jaciara', 13),\n" +
    "(1402, 'Jangada', 13),\n" +
    "(1403, 'Jauru', 13),\n" +
    "(1404, 'Juara', 13),\n" +
    "(1405, 'Juína', 13),\n" +
    "(1406, 'Juruena', 13),\n" +
    "(1407, 'Juscimeira', 13),\n" +
    "(1408, 'Lambari dOeste', 13),\n" +
    "(1409, 'Lucas do Rio Verde', 13),\n" +
    "(1410, 'Luciára', 13),\n" +
    "(1411, 'Marcelândia', 13),\n" +
    "(1412, 'Matupá', 13),\n" +
    "(1413, 'Mirassol dOeste', 13),\n" +
    "(1414, 'Nobres', 13),\n" +
    "(1415, 'Nortelândia', 13),\n" +
    "(1416, 'Nossa Senhora do Livramento', 13),\n" +
    "(1417, 'Nova Bandeirantes', 13),\n" +
    "(1418, 'Nova Brasilândia', 13),\n" +
    "(1419, 'Nova Canaã do Norte', 13),\n" +
    "(1420, 'Nova Guarita', 13),\n" +
    "(1421, 'Nova Lacerda', 13),\n" +
    "(1422, 'Nova Marilândia', 13),\n" +
    "(1423, 'Nova Maringá', 13),\n" +
    "(1424, 'Nova Monte verde', 13),\n" +
    "(1425, 'Nova Mutum', 13),\n" +
    "(1426, 'Nova Olímpia', 13),\n" +
    "(1427, 'Nova Santa Helena', 13),\n" +
    "(1428, 'Nova Ubiratã', 13),\n" +
    "(1429, 'Nova Xavantina', 13),\n" +
    "(1430, 'Novo Horizonte do Norte', 13),\n" +
    "(1431, 'Novo Mundo', 13),\n" +
    "(1432, 'Novo Santo Antônio', 13),\n" +
    "(1433, 'Novo São Joaquim', 13),\n" +
    "(1434, 'Paranaíta', 13),\n" +
    "(1435, 'Paranatinga', 13),\n" +
    "(1436, 'Pedra Preta', 13),\n" +
    "(1437, 'Peixoto de Azevedo', 13),\n" +
    "(1438, 'Planalto da Serra', 13),\n" +
    "(1439, 'Poconé', 13),\n" +
    "(1440, 'Pontal do Araguaia', 13),\n" +
    "(1441, 'Ponte Branca', 13),\n" +
    "(1442, 'Pontes e Lacerda', 13),\n" +
    "(1443, 'Porto Alegre do Norte', 13),\n" +
    "(1444, 'Porto dos Gaúchos', 13),\n" +
    "(1445, 'Porto Esperidião', 13),\n" +
    "(1446, 'Porto Estrela', 13),\n" +
    "(1447, 'Poxoréo', 13),\n" +
    "(1448, 'Primavera do Leste', 13),\n" +
    "(1449, 'Querência', 13),\n" +
    "(1450, 'Reserva do Cabaçal', 13),\n" +
    "(1451, 'Ribeirão Cascalheira', 13),\n" +
    "(1452, 'Ribeirãozinho', 13),\n" +
    "(1453, 'Rio Branco', 13),\n" +
    "(1454, 'Rondolândia', 13),\n" +
    "(1455, 'Rondonópolis', 13),\n" +
    "(1456, 'Rosário Oeste', 13),\n" +
    "(1457, 'Salto do Céu', 13),\n" +
    "(1458, 'Santa Carmem', 13),\n" +
    "(1459, 'Santa Cruz do Xingu', 13),\n" +
    "(1460, 'Santa Rita do Trivelato', 13),\n" +
    "(1461, 'Santa Terezinha', 13),\n" +
    "(1462, 'Santo Afonso', 13),\n" +
    "(1463, 'Santo Antônio do Leste', 13),\n" +
    "(1464, 'Santo Antônio do Leverger', 13),\n" +
    "(1465, 'São Félix do Araguaia', 13),\n" +
    "(1466, 'São José do Povo', 13),\n" +
    "(1467, 'São José do Rio Claro', 13),\n" +
    "(1468, 'São José do Xingu', 13),\n" +
    "(1469, 'São José dos Quatro Marcos', 13),\n" +
    "(1470, 'São Pedro da Cipa', 13),\n" +
    "(1471, 'Sapezal', 13),\n" +
    "(1472, 'Serra Nova Dourada', 13),\n" +
    "(1473, 'Sinop', 13),\n" +
    "(1474, 'Sorriso', 13),\n" +
    "(1475, 'Tabaporã', 13),\n" +
    "(1476, 'Tangará da Serra', 13),\n" +
    "(1477, 'Tapurah', 13),\n" +
    "(1478, 'Terra Nova do Norte', 13),\n" +
    "(1479, 'Tesouro', 13),\n" +
    "(1480, 'Torixoréu', 13),\n" +
    "(1481, 'União do Sul', 13),\n" +
    "(1482, 'Vale de São Domingos', 13),\n" +
    "(1483, 'Várzea Grande', 13),\n" +
    "(1484, 'Vera', 13),\n" +
    "(1485, 'Vila Bela da Santíssima Trindade', 13),\n" +
    "(1486, 'Vila Rica', 13),\n" +
    "(1487, 'Água Clara', 12),\n" +
    "(1488, 'Alcinópolis', 12),\n" +
    "(1489, 'Amambaí', 12),\n" +
    "(1490, 'Anastácio', 12),\n" +
    "(1491, 'Anaurilândia', 12),\n" +
    "(1492, 'Angélica', 12),\n" +
    "(1493, 'Antônio João', 12),\n" +
    "(1494, 'Aparecida do Taboado', 12),\n" +
    "(1495, 'Aquidauana', 12),\n" +
    "(1496, 'Aral Moreira', 12),\n" +
    "(1497, 'Bandeirantes', 12),\n" +
    "(1498, 'Bataguassu', 12),\n" +
    "(1499, 'Bataiporã', 12),\n" +
    "(1500, 'Bela Vista', 12),\n" +
    "(1501, 'Bodoquena', 12),\n" +
    "(1502, 'Bonito', 12),\n" +
    "(1503, 'Brasilândia', 12),\n" +
    "(1504, 'Caarapó', 12),\n" +
    "(1505, 'Camapuã', 12),\n" +
    "(1506, 'Campo Grande', 12),\n" +
    "(1507, 'Caracol', 12),\n" +
    "(1508, 'Cassilândia', 12),\n" +
    "(1509, 'Chapadão do Sul', 12),\n" +
    "(1510, 'Corguinho', 12);";

const sql4 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(1511, 'Coronel Sapucaia', 12),\n" +
    "(1512, 'Corumbá', 12),\n" +
    "(1513, 'Costa Rica', 12),\n" +
    "(1514, 'Coxim', 12),\n" +
    "(1515, 'Deodápolis', 12),\n" +
    "(1516, 'Dois Irmãos do Buriti', 12),\n" +
    "(1517, 'Douradina', 12),\n" +
    "(1518, 'Dourados', 12),\n" +
    "(1519, 'Eldorado', 12),\n" +
    "(1520, 'Fátima do Sul', 12),\n" +
    "(1521, 'Figueirão', 12),\n" +
    "(1522, 'Glória de Dourados', 12),\n" +
    "(1523, 'Guia Lopes da Laguna', 12),\n" +
    "(1524, 'Iguatemi', 12),\n" +
    "(1525, 'Inocência', 12),\n" +
    "(1526, 'Itaporã', 12),\n" +
    "(1527, 'Itaquiraí', 12),\n" +
    "(1528, 'Ivinhema', 12),\n" +
    "(1529, 'Japorã', 12),\n" +
    "(1530, 'Jaraguari', 12),\n" +
    "(1531, 'Jardim', 12),\n" +
    "(1532, 'Jateí', 12),\n" +
    "(1533, 'Juti', 12),\n" +
    "(1534, 'Ladário', 12),\n" +
    "(1535, 'Laguna Carapã', 12),\n" +
    "(1536, 'Maracaju', 12),\n" +
    "(1537, 'Miranda', 12),\n" +
    "(1538, 'Mundo Novo', 12),\n" +
    "(1539, 'Naviraí', 12),\n" +
    "(1540, 'Nioaque', 12),\n" +
    "(1541, 'Nova Alvorada do Sul', 12),\n" +
    "(1542, 'Nova Andradina', 12),\n" +
    "(1543, 'Novo Horizonte do Sul', 12),\n" +
    "(1544, 'Paranaíba', 12),\n" +
    "(1545, 'Paranhos', 12),\n" +
    "(1546, 'Pedro Gomes', 12),\n" +
    "(1547, 'Ponta Porã', 12),\n" +
    "(1548, 'Porto Murtinho', 12),\n" +
    "(1549, 'Ribas do Rio Pardo', 12),\n" +
    "(1550, 'Rio Brilhante', 12),\n" +
    "(1551, 'Rio Negro', 12),\n" +
    "(1552, 'Rio Verde de Mato Grosso', 12),\n" +
    "(1553, 'Rochedo', 12),\n" +
    "(1554, 'Santa Rita do Pardo', 12),\n" +
    "(1555, 'São Gabriel do Oeste', 12),\n" +
    "(1556, 'Selvíria', 12),\n" +
    "(1557, 'Sete Quedas', 12),\n" +
    "(1558, 'Sidrolândia', 12),\n" +
    "(1559, 'Sonora', 12),\n" +
    "(1560, 'Tacuru', 12),\n" +
    "(1561, 'Taquarussu', 12),\n" +
    "(1562, 'Terenos', 12),\n" +
    "(1563, 'Três Lagoas', 12),\n" +
    "(1564, 'Vicentina', 12),\n" +
    "(1565, 'Abadia dos Dourados', 11),\n" +
    "(1566, 'Abaeté', 11),\n" +
    "(1567, 'Abre Campo', 11),\n" +
    "(1568, 'Acaiaca', 11),\n" +
    "(1569, 'Açucena', 11),\n" +
    "(1570, 'Água Boa', 11),\n" +
    "(1571, 'Água Comprida', 11),\n" +
    "(1572, 'Aguanil', 11),\n" +
    "(1573, 'Águas Formosas', 11),\n" +
    "(1574, 'Águas Vermelhas', 11),\n" +
    "(1575, 'Aimorés', 11),\n" +
    "(1576, 'Aiuruoca', 11),\n" +
    "(1577, 'Alagoa', 11),\n" +
    "(1578, 'Albertina', 11),\n" +
    "(1579, 'Além Paraíba', 11),\n" +
    "(1580, 'Alfenas', 11),\n" +
    "(1581, 'Alfredo Vasconcelos', 11),\n" +
    "(1582, 'Almenara', 11),\n" +
    "(1583, 'Alpercata', 11),\n" +
    "(1584, 'Alpinópolis', 11),\n" +
    "(1585, 'Alterosa', 11),\n" +
    "(1586, 'Alto Caparaó', 11),\n" +
    "(1587, 'Alto Jequitibá', 11),\n" +
    "(1588, 'Alto Rio Doce', 11),\n" +
    "(1589, 'Alvarenga', 11),\n" +
    "(1590, 'Alvinópolis', 11),\n" +
    "(1591, 'Alvorada de Minas', 11),\n" +
    "(1592, 'Amparo do Serra', 11),\n" +
    "(1593, 'Andradas', 11),\n" +
    "(1594, 'Andrelândia', 11),\n" +
    "(1595, 'Angelândia', 11),\n" +
    "(1596, 'Antônio Carlos', 11),\n" +
    "(1597, 'Antônio Dias', 11),\n" +
    "(1598, 'Antônio Prado de Minas', 11),\n" +
    "(1599, 'Araçaí', 11),\n" +
    "(1600, 'Aracitaba', 11),\n" +
    "(1601, 'Araçuaí', 11),\n" +
    "(1602, 'Araguari', 11),\n" +
    "(1603, 'Arantina', 11),\n" +
    "(1604, 'Araponga', 11),\n" +
    "(1605, 'Araporã', 11),\n" +
    "(1606, 'Arapuá', 11),\n" +
    "(1607, 'Araújos', 11),\n" +
    "(1608, 'Araxá', 11),\n" +
    "(1609, 'Arceburgo', 11),\n" +
    "(1610, 'Arcos', 11),\n" +
    "(1611, 'Areado', 11),\n" +
    "(1612, 'Argirita', 11),\n" +
    "(1613, 'Aricanduva', 11),\n" +
    "(1614, 'Arinos', 11),\n" +
    "(1615, 'Astolfo Dutra', 11),\n" +
    "(1616, 'Ataléia', 11),\n" +
    "(1617, 'Augusto de Lima', 11),\n" +
    "(1618, 'Baependi', 11),\n" +
    "(1619, 'Baldim', 11),\n" +
    "(1620, 'Bambuí', 11),\n" +
    "(1621, 'Bandeira', 11),\n" +
    "(1622, 'Bandeira do Sul', 11),\n" +
    "(1623, 'Barão de Cocais', 11),\n" +
    "(1624, 'Barão de Monte Alto', 11),\n" +
    "(1625, 'Barbacena', 11),\n" +
    "(1626, 'Barra Longa', 11),\n" +
    "(1627, 'Barroso', 11),\n" +
    "(1628, 'Bela Vista de Minas', 11),\n" +
    "(1629, 'Belmiro Braga', 11),\n" +
    "(1630, 'Belo Horizonte', 11),\n" +
    "(1631, 'Belo Oriente', 11),\n" +
    "(1632, 'Belo Vale', 11),\n" +
    "(1633, 'Berilo', 11),\n" +
    "(1634, 'Berizal', 11),\n" +
    "(1635, 'Bertópolis', 11),\n" +
    "(1636, 'Betim', 11),\n" +
    "(1637, 'Bias Fortes', 11),\n" +
    "(1638, 'Bicas', 11),\n" +
    "(1639, 'Biquinhas', 11),\n" +
    "(1640, 'Boa Esperança', 11),\n" +
    "(1641, 'Bocaina de Minas', 11),\n" +
    "(1642, 'Bocaiúva', 11),\n" +
    "(1643, 'Bom Despacho', 11),\n" +
    "(1644, 'Bom Jardim de Minas', 11),\n" +
    "(1645, 'Bom Jesus da Penha', 11),\n" +
    "(1646, 'Bom Jesus do Amparo', 11),\n" +
    "(1647, 'Bom Jesus do Galho', 11),\n" +
    "(1648, 'Bom Repouso', 11),\n" +
    "(1649, 'Bom Sucesso', 11),\n" +
    "(1650, 'Bonfim', 11),\n" +
    "(1651, 'Bonfinópolis de Minas', 11),\n" +
    "(1652, 'Bonito de Minas', 11),\n" +
    "(1653, 'Borda da Mata', 11),\n" +
    "(1654, 'Botelhos', 11),\n" +
    "(1655, 'Botumirim', 11),\n" +
    "(1656, 'Brás Pires', 11),\n" +
    "(1657, 'Brasilândia de Minas', 11),\n" +
    "(1658, 'Brasília de Minas', 11),\n" +
    "(1659, 'Brasópolis', 11),\n" +
    "(1660, 'Braúnas', 11),\n" +
    "(1661, 'Brumadinho', 11),\n" +
    "(1662, 'Bueno Brandão', 11),\n" +
    "(1663, 'Buenópolis', 11),\n" +
    "(1664, 'Bugre', 11),\n" +
    "(1665, 'Buritis', 11),\n" +
    "(1666, 'Buritizeiro', 11),\n" +
    "(1667, 'Cabeceira Grande', 11),\n" +
    "(1668, 'Cabo Verde', 11),\n" +
    "(1669, 'Cachoeira da Prata', 11),\n" +
    "(1670, 'Cachoeira de Minas', 11),\n" +
    "(1671, 'Cachoeira de Pajeú', 11),\n" +
    "(1672, 'Cachoeira Dourada', 11),\n" +
    "(1673, 'Caetanópolis', 11),\n" +
    "(1674, 'Caeté', 11),\n" +
    "(1675, 'Caiana', 11),\n" +
    "(1676, 'Cajuri', 11),\n" +
    "(1677, 'Caldas', 11),\n" +
    "(1678, 'Camacho', 11),\n" +
    "(1679, 'Camanducaia', 11),\n" +
    "(1680, 'Cambuí', 11),\n" +
    "(1681, 'Cambuquira', 11),\n" +
    "(1682, 'Campanário', 11),\n" +
    "(1683, 'Campanha', 11),\n" +
    "(1684, 'Campestre', 11),\n" +
    "(1685, 'Campina Verde', 11),\n" +
    "(1686, 'Campo Azul', 11),\n" +
    "(1687, 'Campo Belo', 11),\n" +
    "(1688, 'Campo do Meio', 11),\n" +
    "(1689, 'Campo Florido', 11),\n" +
    "(1690, 'Campos Altos', 11),\n" +
    "(1691, 'Campos Gerais', 11),\n" +
    "(1692, 'Cana Verde', 11),\n" +
    "(1693, 'Canaã', 11),\n" +
    "(1694, 'Canápolis', 11),\n" +
    "(1695, 'Candeias', 11),\n" +
    "(1696, 'Cantagalo', 11),\n" +
    "(1697, 'Caparaó', 11),\n" +
    "(1698, 'Capela Nova', 11),\n" +
    "(1699, 'Capelinha', 11),\n" +
    "(1700, 'Capetinga', 11),\n" +
    "(1701, 'Capim Branco', 11),\n" +
    "(1702, 'Capinópolis', 11),\n" +
    "(1703, 'Capitão Andrade', 11),\n" +
    "(1704, 'Capitão Enéas', 11),\n" +
    "(1705, 'Capitólio', 11),\n" +
    "(1706, 'Caputira', 11),\n" +
    "(1707, 'Caraí', 11),\n" +
    "(1708, 'Caranaíba', 11),\n" +
    "(1709, 'Carandaí', 11),\n" +
    "(1710, 'Carangola', 11),\n" +
    "(1711, 'Caratinga', 11),\n" +
    "(1712, 'Carbonita', 11),\n" +
    "(1713, 'Careaçu', 11),\n" +
    "(1714, 'Carlos Chagas', 11),\n" +
    "(1715, 'Carmésia', 11),\n" +
    "(1716, 'Carmo da Cachoeira', 11),\n" +
    "(1717, 'Carmo da Mata', 11),\n" +
    "(1718, 'Carmo de Minas', 11),\n" +
    "(1719, 'Carmo do Cajuru', 11),\n" +
    "(1720, 'Carmo do Paranaíba', 11),\n" +
    "(1721, 'Carmo do Rio Claro', 11),\n" +
    "(1722, 'Carmópolis de Minas', 11),\n" +
    "(1723, 'Carneirinho', 11),\n" +
    "(1724, 'Carrancas', 11),\n" +
    "(1725, 'Carvalhópolis', 11),\n" +
    "(1726, 'Carvalhos', 11),\n" +
    "(1727, 'Casa Grande', 11),\n" +
    "(1728, 'Cascalho Rico', 11),\n" +
    "(1729, 'Cássia', 11),\n" +
    "(1730, 'Cataguases', 11),\n" +
    "(1731, 'Catas Altas', 11),\n" +
    "(1732, 'Catas Altas da Noruega', 11),\n" +
    "(1733, 'Catuji', 11),\n" +
    "(1734, 'Catuti', 11),\n" +
    "(1735, 'Caxambu', 11),\n" +
    "(1736, 'Cedro do Abaeté', 11),\n" +
    "(1737, 'Central de Minas', 11),\n" +
    "(1738, 'Centralina', 11),\n" +
    "(1739, 'Chácara', 11),\n" +
    "(1740, 'Chalé', 11),\n" +
    "(1741, 'Chapada do Norte', 11),\n" +
    "(1742, 'Chapada Gaúcha', 11),\n" +
    "(1743, 'Chiador', 11),\n" +
    "(1744, 'Cipotânea', 11),\n" +
    "(1745, 'Claraval', 11),\n" +
    "(1746, 'Claro dos Poções', 11),\n" +
    "(1747, 'Cláudio', 11),\n" +
    "(1748, 'Coimbra', 11),\n" +
    "(1749, 'Coluna', 11),\n" +
    "(1750, 'Comendador Gomes', 11),\n" +
    "(1751, 'Comercinho', 11),\n" +
    "(1752, 'Conceição da Aparecida', 11),\n" +
    "(1753, 'Conceição da Barra de Minas', 11),\n" +
    "(1754, 'Conceição das Alagoas', 11),\n" +
    "(1755, 'Conceição das Pedras', 11),\n" +
    "(1756, 'Conceição de Ipanema', 11),\n" +
    "(1757, 'Conceição do Mato Dentro', 11),\n" +
    "(1758, 'Conceição do Pará', 11),\n" +
    "(1759, 'Conceição do Rio Verde', 11),\n" +
    "(1760, 'Conceição dos Ouros', 11),\n" +
    "(1761, 'Cônego Marinho', 11),\n" +
    "(1762, 'Confins', 11),\n" +
    "(1763, 'Congonhal', 11),\n" +
    "(1764, 'Congonhas', 11),\n" +
    "(1765, 'Congonhas do Norte', 11),\n" +
    "(1766, 'Conquista', 11),\n" +
    "(1767, 'Conselheiro Lafaiete', 11),\n" +
    "(1768, 'Conselheiro Pena', 11),\n" +
    "(1769, 'Consolação', 11),\n" +
    "(1770, 'Contagem', 11),\n" +
    "(1771, 'Coqueiral', 11),\n" +
    "(1772, 'Coração de Jesus', 11),\n" +
    "(1773, 'Cordisburgo', 11),\n" +
    "(1774, 'Cordislândia', 11),\n" +
    "(1775, 'Corinto', 11),\n" +
    "(1776, 'Coroaci', 11),\n" +
    "(1777, 'Coromandel', 11),\n" +
    "(1778, 'Coronel Fabriciano', 11),\n" +
    "(1779, 'Coronel Murta', 11),\n" +
    "(1780, 'Coronel Pacheco', 11),\n" +
    "(1781, 'Coronel Xavier Chaves', 11),\n" +
    "(1782, 'Córrego Danta', 11),\n" +
    "(1783, 'Córrego do Bom Jesus', 11),\n" +
    "(1784, 'Córrego Fundo', 11),\n" +
    "(1785, 'Córrego Novo', 11),\n" +
    "(1786, 'Couto de Magalhães de Minas', 11),\n" +
    "(1787, 'Crisólita', 11),\n" +
    "(1788, 'Cristais', 11),\n" +
    "(1789, 'Cristália', 11),\n" +
    "(1790, 'Cristiano Otoni', 11),\n" +
    "(1791, 'Cristina', 11),\n" +
    "(1792, 'Crucilândia', 11),\n" +
    "(1793, 'Cruzeiro da Fortaleza', 11),\n" +
    "(1794, 'Cruzília', 11),\n" +
    "(1795, 'Cuparaque', 11),\n" +
    "(1796, 'Curral de Dentro', 11),\n" +
    "(1797, 'Curvelo', 11),\n" +
    "(1798, 'Datas', 11),\n" +
    "(1799, 'Delfim Moreira', 11),\n" +
    "(1800, 'Delfinópolis', 11),\n" +
    "(1801, 'Delta', 11),\n" +
    "(1802, 'Descoberto', 11),\n" +
    "(1803, 'Desterro de Entre Rios', 11),\n" +
    "(1804, 'Desterro do Melo', 11),\n" +
    "(1805, 'Diamantina', 11),\n" +
    "(1806, 'Diogo de Vasconcelos', 11),\n" +
    "(1807, 'Dionísio', 11),\n" +
    "(1808, 'Divinésia', 11),\n" +
    "(1809, 'Divino', 11),\n" +
    "(1810, 'Divino das Laranjeiras', 11),\n" +
    "(1811, 'Divinolândia de Minas', 11),\n" +
    "(1812, 'Divinópolis', 11),\n" +
    "(1813, 'Divisa Alegre', 11),\n" +
    "(1814, 'Divisa Nova', 11),\n" +
    "(1815, 'Divisópolis', 11),\n" +
    "(1816, 'Dom Bosco', 11),\n" +
    "(1817, 'Dom Cavati', 11),\n" +
    "(1818, 'Dom Joaquim', 11),\n" +
    "(1819, 'Dom Silvério', 11),\n" +
    "(1820, 'Dom Viçoso', 11),\n" +
    "(1821, 'Dona Eusébia', 11),\n" +
    "(1822, 'Dores de Campos', 11),\n" +
    "(1823, 'Dores de Guanhães', 11),\n" +
    "(1824, 'Dores do Indaiá', 11),\n" +
    "(1825, 'Dores do Turvo', 11),\n" +
    "(1826, 'Doresópolis', 11),\n" +
    "(1827, 'Douradoquara', 11),\n" +
    "(1828, 'Durandé', 11),\n" +
    "(1829, 'Elói Mendes', 11),\n" +
    "(1830, 'Engenheiro Caldas', 11),\n" +
    "(1831, 'Engenheiro Navarro', 11),\n" +
    "(1832, 'Entre Folhas', 11),\n" +
    "(1833, 'Entre Rios de Minas', 11),\n" +
    "(1834, 'Ervália', 11),\n" +
    "(1835, 'Esmeraldas', 11),\n" +
    "(1836, 'Espera Feliz', 11),\n" +
    "(1837, 'Espinosa', 11),\n" +
    "(1838, 'Espírito Santo do Dourado', 11),\n" +
    "(1839, 'Estiva', 11),\n" +
    "(1840, 'Estrela Dalva', 11),\n" +
    "(1841, 'Estrela do Indaiá', 11),\n" +
    "(1842, 'Estrela do Sul', 11),\n" +
    "(1843, 'Eugenópolis', 11),\n" +
    "(1844, 'Ewbank da Câmara', 11),\n" +
    "(1845, 'Extrema', 11),\n" +
    "(1846, 'Fama', 11),\n" +
    "(1847, 'Faria Lemos', 11),\n" +
    "(1848, 'Felício dos Santos', 11),\n" +
    "(1849, 'Felisburgo', 11),\n" +
    "(1850, 'Felixlândia', 11),\n" +
    "(1851, 'Fernandes Tourinho', 11),\n" +
    "(1852, 'Ferros', 11),\n" +
    "(1853, 'Fervedouro', 11),\n" +
    "(1854, 'Florestal', 11),\n" +
    "(1855, 'Formiga', 11),\n" +
    "(1856, 'Formoso', 11),\n" +
    "(1857, 'Fortaleza de Minas', 11),\n" +
    "(1858, 'Fortuna de Minas', 11),\n" +
    "(1859, 'Francisco Badaró', 11),\n" +
    "(1860, 'Francisco Dumont', 11),\n" +
    "(1861, 'Francisco Sá', 11),\n" +
    "(1862, 'Franciscópolis', 11),\n" +
    "(1863, 'Frei Gaspar', 11),\n" +
    "(1864, 'Frei Inocêncio', 11),\n" +
    "(1865, 'Frei Lagonegro', 11),\n" +
    "(1866, 'Fronteira', 11),\n" +
    "(1867, 'Fronteira dos Vales', 11),\n" +
    "(1868, 'Fruta de Leite', 11),\n" +
    "(1869, 'Frutal', 11),\n" +
    "(1870, 'Funilândia', 11),\n" +
    "(1871, 'Galiléia', 11),\n" +
    "(1872, 'Gameleiras', 11),\n" +
    "(1873, 'Glaucilândia', 11),\n" +
    "(1874, 'Goiabeira', 11),\n" +
    "(1875, 'Goianá', 11),\n" +
    "(1876, 'Gonçalves', 11),\n" +
    "(1877, 'Gonzaga', 11),\n" +
    "(1878, 'Gouveia', 11),\n" +
    "(1879, 'Governador Valadares', 11),\n" +
    "(1880, 'Grão Mogol', 11),\n" +
    "(1881, 'Grupiara', 11),\n" +
    "(1882, 'Guanhães', 11),\n" +
    "(1883, 'Guapé', 11),\n" +
    "(1884, 'Guaraciaba', 11),\n" +
    "(1885, 'Guaraciama', 11),\n" +
    "(1886, 'Guaranésia', 11),\n" +
    "(1887, 'Guarani', 11),\n" +
    "(1888, 'Guarará', 11),\n" +
    "(1889, 'Guarda-Mor', 11),\n" +
    "(1890, 'Guaxupé', 11),\n" +
    "(1891, 'Guidoval', 11),\n" +
    "(1892, 'Guimarânia', 11),\n" +
    "(1893, 'Guiricema', 11),\n" +
    "(1894, 'Gurinhatã', 11),\n" +
    "(1895, 'Heliodora', 11),\n" +
    "(1896, 'Iapu', 11),\n" +
    "(1897, 'Ibertioga', 11),\n" +
    "(1898, 'Ibiá', 11),\n" +
    "(1899, 'Ibiaí', 11),\n" +
    "(1900, 'Ibiracatu', 11),\n" +
    "(1901, 'Ibiraci', 11),\n" +
    "(1902, 'Ibirité', 11),\n" +
    "(1903, 'Ibitiúra de Minas', 11),\n" +
    "(1904, 'Ibituruna', 11),\n" +
    "(1905, 'Icaraí de Minas', 11),\n" +
    "(1906, 'Igarapé', 11),\n" +
    "(1907, 'Igaratinga', 11),\n" +
    "(1908, 'Iguatama', 11),\n" +
    "(1909, 'Ijaci', 11),\n" +
    "(1910, 'Ilicínea', 11),\n" +
    "(1911, 'Imbé de Minas', 11),\n" +
    "(1912, 'Inconfidentes', 11),\n" +
    "(1913, 'Indaiabira', 11),\n" +
    "(1914, 'Indianópolis', 11),\n" +
    "(1915, 'Ingaí', 11),\n" +
    "(1916, 'Inhapim', 11),\n" +
    "(1917, 'Inhaúma', 11),\n" +
    "(1918, 'Inimutaba', 11),\n" +
    "(1919, 'Ipaba', 11),\n" +
    "(1920, 'Ipanema', 11),\n" +
    "(1921, 'Ipatinga', 11),\n" +
    "(1922, 'Ipiaçu', 11),\n" +
    "(1923, 'Ipuiúna', 11),\n" +
    "(1924, 'Iraí de Minas', 11),\n" +
    "(1925, 'Itabira', 11),\n" +
    "(1926, 'Itabirinha de Mantena', 11),\n" +
    "(1927, 'Itabirito', 11),\n" +
    "(1928, 'Itacambira', 11),\n" +
    "(1929, 'Itacarambi', 11),\n" +
    "(1930, 'Itaguara', 11),\n" +
    "(1931, 'Itaipé', 11),\n" +
    "(1932, 'Itajubá', 11),\n" +
    "(1933, 'Itamarandiba', 11),\n" +
    "(1934, 'Itamarati de Minas', 11),\n" +
    "(1935, 'Itambacuri', 11),\n" +
    "(1936, 'Itambé do Mato Dentro', 11),\n" +
    "(1937, 'Itamogi', 11),\n" +
    "(1938, 'Itamonte', 11),\n" +
    "(1939, 'Itanhandu', 11),\n" +
    "(1940, 'Itanhomi', 11),\n" +
    "(1941, 'Itaobim', 11),\n" +
    "(1942, 'Itapagipe', 11),\n" +
    "(1943, 'Itapecerica', 11),\n" +
    "(1944, 'Itapeva', 11),\n" +
    "(1945, 'Itatiaiuçu', 11),\n" +
    "(1946, 'Itaú de Minas', 11),\n" +
    "(1947, 'Itaúna', 11),\n" +
    "(1948, 'Itaverava', 11),\n" +
    "(1949, 'Itinga', 11),\n" +
    "(1950, 'Itueta', 11),\n" +
    "(1951, 'Ituiutaba', 11),\n" +
    "(1952, 'Itumirim', 11),\n" +
    "(1953, 'Iturama', 11),\n" +
    "(1954, 'Itutinga', 11),\n" +
    "(1955, 'Jaboticatubas', 11),\n" +
    "(1956, 'Jacinto', 11),\n" +
    "(1957, 'Jacuí', 11),\n" +
    "(1958, 'Jacutinga', 11),\n" +
    "(1959, 'Jaguaraçu', 11),\n" +
    "(1960, 'Jaíba', 11),\n" +
    "(1961, 'Jampruca', 11),\n" +
    "(1962, 'Janaúba', 11),\n" +
    "(1963, 'Januária', 11),\n" +
    "(1964, 'Japaraíba', 11),\n" +
    "(1965, 'Japonvar', 11),\n" +
    "(1966, 'Jeceaba', 11),\n" +
    "(1967, 'Jenipapo de Minas', 11),\n" +
    "(1968, 'Jequeri', 11),\n" +
    "(1969, 'Jequitaí', 11),\n" +
    "(1970, 'Jequitibá', 11),\n" +
    "(1971, 'Jequitinhonha', 11),\n" +
    "(1972, 'Jesuânia', 11),\n" +
    "(1973, 'Joaíma', 11),\n" +
    "(1974, 'Joanésia', 11),\n" +
    "(1975, 'João Monlevade', 11),\n" +
    "(1976, 'João Pinheiro', 11),\n" +
    "(1977, 'Joaquim Felício', 11),\n" +
    "(1978, 'Jordânia', 11),\n" +
    "(1979, 'José Gonçalves de Minas', 11),\n" +
    "(1980, 'José Raydan', 11),\n" +
    "(1981, 'Josenópolis', 11),\n" +
    "(1982, 'Juatuba', 11),\n" +
    "(1983, 'Juiz de Fora', 11),\n" +
    "(1984, 'Juramento', 11),\n" +
    "(1985, 'Juruaia', 11),\n" +
    "(1986, 'Juvenília', 11),\n" +
    "(1987, 'Ladainha', 11),\n" +
    "(1988, 'Lagamar', 11),\n" +
    "(1989, 'Lagoa da Prata', 11),\n" +
    "(1990, 'Lagoa dos Patos', 11),\n" +
    "(1991, 'Lagoa Dourada', 11),\n" +
    "(1992, 'Lagoa Formosa', 11),\n" +
    "(1993, 'Lagoa Grande', 11),\n" +
    "(1994, 'Lagoa Santa', 11),\n" +
    "(1995, 'Lajinha', 11),\n" +
    "(1996, 'Lambari', 11),\n" +
    "(1997, 'Lamim', 11),\n" +
    "(1998, 'Laranjal', 11),\n" +
    "(1999, 'Lassance', 11),\n" +
    "(2000, 'Lavras', 11),\n" +
    "(2001, 'Leandro Ferreira', 11),\n" +
    "(2002, 'Leme do Prado', 11),\n" +
    "(2003, 'Leopoldina', 11),\n" +
    "(2004, 'Liberdade', 11),\n" +
    "(2005, 'Lima Duarte', 11),\n" +
    "(2006, 'Limeira do Oeste', 11),\n" +
    "(2007, 'Lontra', 11),\n" +
    "(2008, 'Luisburgo', 11),\n" +
    "(2009, 'Luislândia', 11),\n" +
    "(2010, 'Luminárias', 11),\n" +
    "(2011, 'Luz', 11),\n" +
    "(2012, 'Machacalis', 11),\n" +
    "(2013, 'Machado', 11),\n" +
    "(2014, 'Madre de Deus de Minas', 11),\n" +
    "(2015, 'Malacacheta', 11),\n" +
    "(2016, 'Mamonas', 11),\n" +
    "(2017, 'Manga', 11),\n" +
    "(2018, 'Manhuaçu', 11),\n" +
    "(2019, 'Manhumirim', 11),\n" +
    "(2020, 'Mantena', 11);";

const sql5 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(2021, 'Mar de Espanha', 11),\n" +
    "(2022, 'Maravilhas', 11),\n" +
    "(2023, 'Maria da Fé', 11),\n" +
    "(2024, 'Mariana', 11),\n" +
    "(2025, 'Marilac', 11),\n" +
    "(2026, 'Mário Campos', 11),\n" +
    "(2027, 'Maripá de Minas', 11),\n" +
    "(2028, 'Marliéria', 11),\n" +
    "(2029, 'Marmelópolis', 11),\n" +
    "(2030, 'Martinho Campos', 11),\n" +
    "(2031, 'Martins Soares', 11),\n" +
    "(2032, 'Mata Verde', 11),\n" +
    "(2033, 'Materlândia', 11),\n" +
    "(2034, 'Mateus Leme', 11),\n" +
    "(2035, 'Mathias Lobato', 11),\n" +
    "(2036, 'Matias Barbosa', 11),\n" +
    "(2037, 'Matias Cardoso', 11),\n" +
    "(2038, 'Matipó', 11),\n" +
    "(2039, 'Mato Verde', 11),\n" +
    "(2040, 'Matozinhos', 11),\n" +
    "(2041, 'Matutina', 11),\n" +
    "(2042, 'Medeiros', 11),\n" +
    "(2043, 'Medina', 11),\n" +
    "(2044, 'Mendes Pimentel', 11),\n" +
    "(2045, 'Mercês', 11),\n" +
    "(2046, 'Mesquita', 11),\n" +
    "(2047, 'Minas Novas', 11),\n" +
    "(2048, 'Minduri', 11),\n" +
    "(2049, 'Mirabela', 11),\n" +
    "(2050, 'Miradouro', 11),\n" +
    "(2051, 'Miraí', 11),\n" +
    "(2052, 'Miravânia', 11),\n" +
    "(2053, 'Moeda', 11),\n" +
    "(2054, 'Moema', 11),\n" +
    "(2055, 'Monjolos', 11),\n" +
    "(2056, 'Monsenhor Paulo', 11),\n" +
    "(2057, 'Montalvânia', 11),\n" +
    "(2058, 'Monte Alegre de Minas', 11),\n" +
    "(2059, 'Monte Azul', 11),\n" +
    "(2060, 'Monte Belo', 11),\n" +
    "(2061, 'Monte Carmelo', 11),\n" +
    "(2062, 'Monte Formoso', 11),\n" +
    "(2063, 'Monte Santo de Minas', 11),\n" +
    "(2064, 'Monte Sião', 11),\n" +
    "(2065, 'Montes Claros', 11),\n" +
    "(2066, 'Montezuma', 11),\n" +
    "(2067, 'Morada Nova de Minas', 11),\n" +
    "(2068, 'Morro da Garça', 11),\n" +
    "(2069, 'Morro do Pilar', 11),\n" +
    "(2070, 'Munhoz', 11),\n" +
    "(2071, 'Muriaé', 11),\n" +
    "(2072, 'Mutum', 11),\n" +
    "(2073, 'Muzambinho', 11),\n" +
    "(2074, 'Nacip Raydan', 11),\n" +
    "(2075, 'Nanuque', 11),\n" +
    "(2076, 'Naque', 11),\n" +
    "(2077, 'Natalândia', 11),\n" +
    "(2078, 'Natércia', 11),\n" +
    "(2079, 'Nazareno', 11),\n" +
    "(2080, 'Nepomuceno', 11),\n" +
    "(2081, 'Ninheira', 11),\n" +
    "(2082, 'Nova Belém', 11),\n" +
    "(2083, 'Nova Era', 11),\n" +
    "(2084, 'Nova Lima', 11),\n" +
    "(2085, 'Nova Módica', 11),\n" +
    "(2086, 'Nova Ponte', 11),\n" +
    "(2087, 'Nova Porteirinha', 11),\n" +
    "(2088, 'Nova Resende', 11),\n" +
    "(2089, 'Nova Serrana', 11),\n" +
    "(2090, 'Nova União', 11),\n" +
    "(2091, 'Novo Cruzeiro', 11),\n" +
    "(2092, 'Novo Oriente de Minas', 11),\n" +
    "(2093, 'Novorizonte', 11),\n" +
    "(2094, 'Olaria', 11),\n" +
    "(2095, 'Olhos-dÁgua', 11),\n" +
    "(2096, 'Olímpio Noronha', 11),\n" +
    "(2097, 'Oliveira', 11),\n" +
    "(2098, 'Oliveira Fortes', 11),\n" +
    "(2099, 'Onça de Pitangui', 11),\n" +
    "(2100, 'Oratórios', 11),\n" +
    "(2101, 'Orizânia', 11),\n" +
    "(2102, 'Ouro Branco', 11),\n" +
    "(2103, 'Ouro Fino', 11),\n" +
    "(2104, 'Ouro Preto', 11),\n" +
    "(2105, 'Ouro Verde de Minas', 11),\n" +
    "(2106, 'Padre Carvalho', 11),\n" +
    "(2107, 'Padre Paraíso', 11),\n" +
    "(2108, 'Pai Pedro', 11),\n" +
    "(2109, 'Paineiras', 11),\n" +
    "(2110, 'Pains', 11),\n" +
    "(2111, 'Paiva', 11),\n" +
    "(2112, 'Palma', 11),\n" +
    "(2113, 'Palmópolis', 11),\n" +
    "(2114, 'Papagaios', 11),\n" +
    "(2115, 'Pará de Minas', 11),\n" +
    "(2116, 'Paracatu', 11),\n" +
    "(2117, 'Paraguaçu', 11),\n" +
    "(2118, 'Paraisópolis', 11),\n" +
    "(2119, 'Paraopeba', 11),\n" +
    "(2120, 'Passa Quatro', 11),\n" +
    "(2121, 'Passa Tempo', 11),\n" +
    "(2122, 'Passabém', 11),\n" +
    "(2123, 'Passa-Vinte', 11),\n" +
    "(2124, 'Passos', 11),\n" +
    "(2125, 'Patis', 11),\n" +
    "(2126, 'Patos de Minas', 11),\n" +
    "(2127, 'Patrocínio', 11),\n" +
    "(2128, 'Patrocínio do Muriaé', 11),\n" +
    "(2129, 'Paula Cândido', 11),\n" +
    "(2130, 'Paulistas', 11),\n" +
    "(2131, 'Pavão', 11),\n" +
    "(2132, 'Peçanha', 11),\n" +
    "(2133, 'Pedra Azul', 11),\n" +
    "(2134, 'Pedra Bonita', 11),\n" +
    "(2135, 'Pedra do Anta', 11),\n" +
    "(2136, 'Pedra do Indaiá', 11),\n" +
    "(2137, 'Pedra Dourada', 11),\n" +
    "(2138, 'Pedralva', 11),\n" +
    "(2139, 'Pedras de Maria da Cruz', 11),\n" +
    "(2140, 'Pedrinópolis', 11),\n" +
    "(2141, 'Pedro Leopoldo', 11),\n" +
    "(2142, 'Pedro Teixeira', 11),\n" +
    "(2143, 'Pequeri', 11),\n" +
    "(2144, 'Pequi', 11),\n" +
    "(2145, 'Perdigão', 11),\n" +
    "(2146, 'Perdizes', 11),\n" +
    "(2147, 'Perdões', 11),\n" +
    "(2148, 'Periquito', 11),\n" +
    "(2149, 'Pescador', 11),\n" +
    "(2150, 'Piau', 11),\n" +
    "(2151, 'Piedade de Caratinga', 11),\n" +
    "(2152, 'Piedade de Ponte Nova', 11),\n" +
    "(2153, 'Piedade do Rio Grande', 11),\n" +
    "(2154, 'Piedade dos Gerais', 11),\n" +
    "(2155, 'Pimenta', 11),\n" +
    "(2156, 'Pingo-dÁgua', 11),\n" +
    "(2157, 'Pintópolis', 11),\n" +
    "(2158, 'Piracema', 11),\n" +
    "(2159, 'Pirajuba', 11),\n" +
    "(2160, 'Piranga', 11),\n" +
    "(2161, 'Piranguçu', 11),\n" +
    "(2162, 'Piranguinho', 11),\n" +
    "(2163, 'Pirapetinga', 11),\n" +
    "(2164, 'Pirapora', 11),\n" +
    "(2165, 'Piraúba', 11),\n" +
    "(2166, 'Pitangui', 11),\n" +
    "(2167, 'Piumhi', 11),\n" +
    "(2168, 'Planura', 11),\n" +
    "(2169, 'Poço Fundo', 11),\n" +
    "(2170, 'Poços de Caldas', 11),\n" +
    "(2171, 'Pocrane', 11),\n" +
    "(2172, 'Pompéu', 11),\n" +
    "(2173, 'Ponte Nova', 11),\n" +
    "(2174, 'Ponto Chique', 11),\n" +
    "(2175, 'Ponto dos Volantes', 11),\n" +
    "(2176, 'Porteirinha', 11),\n" +
    "(2177, 'Porto Firme', 11),\n" +
    "(2178, 'Poté', 11),\n" +
    "(2179, 'Pouso Alegre', 11),\n" +
    "(2180, 'Pouso Alto', 11),\n" +
    "(2181, 'Prados', 11),\n" +
    "(2182, 'Prata', 11),\n" +
    "(2183, 'Pratápolis', 11),\n" +
    "(2184, 'Pratinha', 11),\n" +
    "(2185, 'Presidente Bernardes', 11),\n" +
    "(2186, 'Presidente Juscelino', 11),\n" +
    "(2187, 'Presidente Kubitschek', 11),\n" +
    "(2188, 'Presidente Olegário', 11),\n" +
    "(2189, 'Prudente de Morais', 11),\n" +
    "(2190, 'Quartel Geral', 11),\n" +
    "(2191, 'Queluzito', 11),\n" +
    "(2192, 'Raposos', 11),\n" +
    "(2193, 'Raul Soares', 11),\n" +
    "(2194, 'Recreio', 11),\n" +
    "(2195, 'Reduto', 11),\n" +
    "(2196, 'Resende Costa', 11),\n" +
    "(2197, 'Resplendor', 11),\n" +
    "(2198, 'Ressaquinha', 11),\n" +
    "(2199, 'Riachinho', 11),\n" +
    "(2200, 'Riacho dos Machados', 11),\n" +
    "(2201, 'Ribeirão das Neves', 11),\n" +
    "(2202, 'Ribeirão Vermelho', 11),\n" +
    "(2203, 'Rio Acima', 11),\n" +
    "(2204, 'Rio Casca', 11),\n" +
    "(2205, 'Rio do Prado', 11),\n" +
    "(2206, 'Rio Doce', 11),\n" +
    "(2207, 'Rio Espera', 11),\n" +
    "(2208, 'Rio Manso', 11),\n" +
    "(2209, 'Rio Novo', 11),\n" +
    "(2210, 'Rio Paranaíba', 11),\n" +
    "(2211, 'Rio Pardo de Minas', 11),\n" +
    "(2212, 'Rio Piracicaba', 11),\n" +
    "(2213, 'Rio Pomba', 11),\n" +
    "(2214, 'Rio Preto', 11),\n" +
    "(2215, 'Rio Vermelho', 11),\n" +
    "(2216, 'Ritápolis', 11),\n" +
    "(2217, 'Rochedo de Minas', 11),\n" +
    "(2218, 'Rodeiro', 11),\n" +
    "(2219, 'Romaria', 11),\n" +
    "(2220, 'Rosário da Limeira', 11),\n" +
    "(2221, 'Rubelita', 11),\n" +
    "(2222, 'Rubim', 11),\n" +
    "(2223, 'Sabará', 11),\n" +
    "(2224, 'Sabinópolis', 11),\n" +
    "(2225, 'Sacramento', 11),\n" +
    "(2226, 'Salinas', 11),\n" +
    "(2227, 'Salto da Divisa', 11),\n" +
    "(2228, 'Santa Bárbara', 11),\n" +
    "(2229, 'Santa Bárbara do Leste', 11),\n" +
    "(2230, 'Santa Bárbara do Monte Verde', 11),\n" +
    "(2231, 'Santa Bárbara do Tugúrio', 11),\n" +
    "(2232, 'Santa Cruz de Minas', 11),\n" +
    "(2233, 'Santa Cruz de Salinas', 11),\n" +
    "(2234, 'Santa Cruz do Escalvado', 11),\n" +
    "(2235, 'Santa Efigênia de Minas', 11),\n" +
    "(2236, 'Santa Fé de Minas', 11),\n" +
    "(2237, 'Santa Helena de Minas', 11),\n" +
    "(2238, 'Santa Juliana', 11),\n" +
    "(2239, 'Santa Luzia', 11),\n" +
    "(2240, 'Santa Margarida', 11),\n" +
    "(2241, 'Santa Maria de Itabira', 11),\n" +
    "(2242, 'Santa Maria do Salto', 11),\n" +
    "(2243, 'Santa Maria do Suaçuí', 11),\n" +
    "(2244, 'Santa Rita de Caldas', 11),\n" +
    "(2245, 'Santa Rita de Ibitipoca', 11),\n" +
    "(2246, 'Santa Rita de Jacutinga', 11),\n" +
    "(2247, 'Santa Rita de Minas', 11),\n" +
    "(2248, 'Santa Rita do Itueto', 11),\n" +
    "(2249, 'Santa Rita do Sapucaí', 11),\n" +
    "(2250, 'Santa Rosa da Serra', 11),\n" +
    "(2251, 'Santa Vitória', 11),\n" +
    "(2252, 'Santana da Vargem', 11),\n" +
    "(2253, 'Santana de Cataguases', 11),\n" +
    "(2254, 'Santana de Pirapama', 11),\n" +
    "(2255, 'Santana do Deserto', 11),\n" +
    "(2256, 'Santana do Garambéu', 11),\n" +
    "(2257, 'Santana do Jacaré', 11),\n" +
    "(2258, 'Santana do Manhuaçu', 11),\n" +
    "(2259, 'Santana do Paraíso', 11),\n" +
    "(2260, 'Santana do Riacho', 11),\n" +
    "(2261, 'Santana dos Montes', 11),\n" +
    "(2262, 'Santo Antônio do Amparo', 11),\n" +
    "(2263, 'Santo Antônio do Aventureiro', 11),\n" +
    "(2264, 'Santo Antônio do Grama', 11),\n" +
    "(2265, 'Santo Antônio do Itambé', 11),\n" +
    "(2266, 'Santo Antônio do Jacinto', 11),\n" +
    "(2267, 'Santo Antônio do Monte', 11),\n" +
    "(2268, 'Santo Antônio do Retiro', 11),\n" +
    "(2269, 'Santo Antônio do Rio Abaixo', 11),\n" +
    "(2270, 'Santo Hipólito', 11),\n" +
    "(2271, 'Santos Dumont', 11),\n" +
    "(2272, 'São Bento Abade', 11),\n" +
    "(2273, 'São Brás do Suaçuí', 11),\n" +
    "(2274, 'São Domingos das Dores', 11),\n" +
    "(2275, 'São Domingos do Prata', 11),\n" +
    "(2276, 'São Félix de Minas', 11),\n" +
    "(2277, 'São Francisco', 11),\n" +
    "(2278, 'São Francisco de Paula', 11),\n" +
    "(2279, 'São Francisco de Sales', 11),\n" +
    "(2280, 'São Francisco do Glória', 11),\n" +
    "(2281, 'São Geraldo', 11),\n" +
    "(2282, 'São Geraldo da Piedade', 11),\n" +
    "(2283, 'São Geraldo do Baixio', 11),\n" +
    "(2284, 'São Gonçalo do Abaeté', 11),\n" +
    "(2285, 'São Gonçalo do Pará', 11),\n" +
    "(2286, 'São Gonçalo do Rio Abaixo', 11),\n" +
    "(2287, 'São Gonçalo do Rio Preto', 11),\n" +
    "(2288, 'São Gonçalo do Sapucaí', 11),\n" +
    "(2289, 'São Gotardo', 11),\n" +
    "(2290, 'São João Batista do Glória', 11),\n" +
    "(2291, 'São João da Lagoa', 11),\n" +
    "(2292, 'São João da Mata', 11),\n" +
    "(2293, 'São João da Ponte', 11),\n" +
    "(2294, 'São João das Missões', 11),\n" +
    "(2295, 'São João del Rei', 11),\n" +
    "(2296, 'São João do Manhuaçu', 11),\n" +
    "(2297, 'São João do Manteninha', 11),\n" +
    "(2298, 'São João do Oriente', 11),\n" +
    "(2299, 'São João do Pacuí', 11),\n" +
    "(2300, 'São João do Paraíso', 11),\n" +
    "(2301, 'São João Evangelista', 11),\n" +
    "(2302, 'São João Nepomuceno', 11),\n" +
    "(2303, 'São Joaquim de Bicas', 11),\n" +
    "(2304, 'São José da Barra', 11),\n" +
    "(2305, 'São José da Lapa', 11),\n" +
    "(2306, 'São José da Safira', 11),\n" +
    "(2307, 'São José da Varginha', 11),\n" +
    "(2308, 'São José do Alegre', 11),\n" +
    "(2309, 'São José do Divino', 11),\n" +
    "(2310, 'São José do Goiabal', 11),\n" +
    "(2311, 'São José do Jacuri', 11),\n" +
    "(2312, 'São José do Mantimento', 11),\n" +
    "(2313, 'São Lourenço', 11),\n" +
    "(2314, 'São Miguel do Anta', 11),\n" +
    "(2315, 'São Pedro da União', 11),\n" +
    "(2316, 'São Pedro do Suaçuí', 11),\n" +
    "(2317, 'São Pedro dos Ferros', 11),\n" +
    "(2318, 'São Romão', 11),\n" +
    "(2319, 'São Roque de Minas', 11),\n" +
    "(2320, 'São Sebastião da Bela Vista', 11),\n" +
    "(2321, 'São Sebastião da Vargem Alegre', 11),\n" +
    "(2322, 'São Sebastião do Anta', 11),\n" +
    "(2323, 'São Sebastião do Maranhão', 11),\n" +
    "(2324, 'São Sebastião do Oeste', 11),\n" +
    "(2325, 'São Sebastião do Paraíso', 11),\n" +
    "(2326, 'São Sebastião do Rio Preto', 11),\n" +
    "(2327, 'São Sebastião do Rio Verde', 11),\n" +
    "(2328, 'São Thomé das Letras', 11),\n" +
    "(2329, 'São Tiago', 11),\n" +
    "(2330, 'São Tomás de Aquino', 11),\n" +
    "(2331, 'São Vicente de Minas', 11),\n" +
    "(2332, 'Sapucaí-Mirim', 11),\n" +
    "(2333, 'Sardoá', 11),\n" +
    "(2334, 'Sarzedo', 11),\n" +
    "(2335, 'Sem-Peixe', 11),\n" +
    "(2336, 'Senador Amaral', 11),\n" +
    "(2337, 'Senador Cortes', 11),\n" +
    "(2338, 'Senador Firmino', 11),\n" +
    "(2339, 'Senador José Bento', 11),\n" +
    "(2340, 'Senador Modestino Gonçalves', 11),\n" +
    "(2341, 'Senhora de Oliveira', 11),\n" +
    "(2342, 'Senhora do Porto', 11),\n" +
    "(2343, 'Senhora dos Remédios', 11),\n" +
    "(2344, 'Sericita', 11),\n" +
    "(2345, 'Seritinga', 11),\n" +
    "(2346, 'Serra Azul de Minas', 11),\n" +
    "(2347, 'Serra da Saudade', 11),\n" +
    "(2348, 'Serra do Salitre', 11),\n" +
    "(2349, 'Serra dos Aimorés', 11),\n" +
    "(2350, 'Serrania', 11),\n" +
    "(2351, 'Serranópolis de Minas', 11),\n" +
    "(2352, 'Serranos', 11),\n" +
    "(2353, 'Serro', 11),\n" +
    "(2354, 'Sete Lagoas', 11),\n" +
    "(2355, 'Setubinha', 11),\n" +
    "(2356, 'Silveirânia', 11),\n" +
    "(2357, 'Silvianópolis', 11),\n" +
    "(2358, 'Simão Pereira', 11),\n" +
    "(2359, 'Simonésia', 11),\n" +
    "(2360, 'Sobrália', 11),\n" +
    "(2361, 'Soledade de Minas', 11),\n" +
    "(2362, 'Tabuleiro', 11),\n" +
    "(2363, 'Taiobeiras', 11),\n" +
    "(2364, 'Taparuba', 11),\n" +
    "(2365, 'Tapira', 11),\n" +
    "(2366, 'Tapiraí', 11),\n" +
    "(2367, 'Taquaraçu de Minas', 11),\n" +
    "(2368, 'Tarumirim', 11),\n" +
    "(2369, 'Teixeiras', 11),\n" +
    "(2370, 'Teófilo Otoni', 11),\n" +
    "(2371, 'Timóteo', 11),\n" +
    "(2372, 'Tiradentes', 11),\n" +
    "(2373, 'Tiros', 11),\n" +
    "(2374, 'Tocantins', 11),\n" +
    "(2375, 'Tocos do Moji', 11),\n" +
    "(2376, 'Toledo', 11),\n" +
    "(2377, 'Tombos', 11),\n" +
    "(2378, 'Três Corações', 11),\n" +
    "(2379, 'Três Marias', 11),\n" +
    "(2380, 'Três Pontas', 11),\n" +
    "(2381, 'Tumiritinga', 11),\n" +
    "(2382, 'Tupaciguara', 11),\n" +
    "(2383, 'Turmalina', 11),\n" +
    "(2384, 'Turvolândia', 11),\n" +
    "(2385, 'Ubá', 11),\n" +
    "(2386, 'Ubaí', 11),\n" +
    "(2387, 'Ubaporanga', 11),\n" +
    "(2388, 'Uberaba', 11),\n" +
    "(2389, 'Uberlândia', 11),\n" +
    "(2390, 'Umburatiba', 11),\n" +
    "(2391, 'Unaí', 11),\n" +
    "(2392, 'União de Minas', 11),\n" +
    "(2393, 'Uruana de Minas', 11),\n" +
    "(2394, 'Urucânia', 11),\n" +
    "(2395, 'Urucuia', 11),\n" +
    "(2396, 'Vargem Alegre', 11),\n" +
    "(2397, 'Vargem Bonita', 11),\n" +
    "(2398, 'Vargem Grande do Rio Pardo', 11),\n" +
    "(2399, 'Varginha', 11),\n" +
    "(2400, 'Varjão de Minas', 11),\n" +
    "(2401, 'Várzea da Palma', 11),\n" +
    "(2402, 'Varzelândia', 11),\n" +
    "(2403, 'Vazante', 11),\n" +
    "(2404, 'Verdelândia', 11),\n" +
    "(2405, 'Veredinha', 11),\n" +
    "(2406, 'Veríssimo', 11),\n" +
    "(2407, 'Vermelho Novo', 11),\n" +
    "(2408, 'Vespasiano', 11),\n" +
    "(2409, 'Viçosa', 11),\n" +
    "(2410, 'Vieiras', 11),\n" +
    "(2411, 'Virgem da Lapa', 11),\n" +
    "(2412, 'Virgínia', 11),\n" +
    "(2413, 'Virginópolis', 11),\n" +
    "(2414, 'Virgolândia', 11),\n" +
    "(2415, 'Visconde do Rio Branco', 11),\n" +
    "(2416, 'Volta Grande', 11),\n" +
    "(2417, 'Wenceslau Braz', 11),\n" +
    "(2418, 'Abaetetuba', 14),\n" +
    "(2419, 'Abel Figueiredo', 14),\n" +
    "(2420, 'Acará', 14),\n" +
    "(2421, 'Afuá', 14),\n" +
    "(2422, 'Água Azul do Norte', 14),\n" +
    "(2423, 'Alenquer', 14),\n" +
    "(2424, 'Almeirim', 14),\n" +
    "(2425, 'Altamira', 14),\n" +
    "(2426, 'Anajás', 14),\n" +
    "(2427, 'Ananindeua', 14),\n" +
    "(2428, 'Anapu', 14),\n" +
    "(2429, 'Augusto Corrêa', 14),\n" +
    "(2430, 'Aurora do Pará', 14),\n" +
    "(2431, 'Aveiro', 14),\n" +
    "(2432, 'Bagre', 14),\n" +
    "(2433, 'Baião', 14),\n" +
    "(2434, 'Bannach', 14),\n" +
    "(2435, 'Barcarena', 14),\n" +
    "(2436, 'Belém', 14),\n" +
    "(2437, 'Belterra', 14),\n" +
    "(2438, 'Benevides', 14),\n" +
    "(2439, 'Bom Jesus do Tocantins', 14),\n" +
    "(2440, 'Bonito', 14),\n" +
    "(2441, 'Bragança', 14),\n" +
    "(2442, 'Brasil Novo', 14),\n" +
    "(2443, 'Brejo Grande do Araguaia', 14),\n" +
    "(2444, 'Breu Branco', 14),\n" +
    "(2445, 'Breves', 14),\n" +
    "(2446, 'Bujaru', 14),\n" +
    "(2447, 'Cachoeira do Arari', 14),\n" +
    "(2448, 'Cachoeira do Piriá', 14),\n" +
    "(2449, 'Cametá', 14),\n" +
    "(2450, 'Canaã dos Carajás', 14),\n" +
    "(2451, 'Capanema', 14),\n" +
    "(2452, 'Capitão Poço', 14),\n" +
    "(2453, 'Castanhal', 14),\n" +
    "(2454, 'Chaves', 14),\n" +
    "(2455, 'Colares', 14),\n" +
    "(2456, 'Conceição do Araguaia', 14),\n" +
    "(2457, 'Concórdia do Pará', 14),\n" +
    "(2458, 'Cumaru do Norte', 14),\n" +
    "(2459, 'Curionópolis', 14),\n" +
    "(2460, 'Curralinho', 14),\n" +
    "(2461, 'Curuá', 14),\n" +
    "(2462, 'Curuçá', 14),\n" +
    "(2463, 'Dom Eliseu', 14),\n" +
    "(2464, 'Eldorado dos Carajás', 14),\n" +
    "(2465, 'Faro', 14),\n" +
    "(2466, 'Floresta do Araguaia', 14),\n" +
    "(2467, 'Garrafão do Norte', 14),\n" +
    "(2468, 'Goianésia do Pará', 14),\n" +
    "(2469, 'Gurupá', 14),\n" +
    "(2470, 'Igarapé-Açu', 14),\n" +
    "(2471, 'Igarapé-Miri', 14),\n" +
    "(2472, 'Inhangapi', 14),\n" +
    "(2473, 'Ipixuna do Pará', 14),\n" +
    "(2474, 'Irituia', 14),\n" +
    "(2475, 'Itaituba', 14),\n" +
    "(2476, 'Itupiranga', 14),\n" +
    "(2477, 'Jacareacanga', 14),\n" +
    "(2478, 'Jacundá', 14),\n" +
    "(2479, 'Juruti', 14),\n" +
    "(2480, 'Limoeiro do Ajuru', 14),\n" +
    "(2481, 'Mãe do Rio', 14),\n" +
    "(2482, 'Magalhães Barata', 14),\n" +
    "(2483, 'Marabá', 14),\n" +
    "(2484, 'Maracanã', 14),\n" +
    "(2485, 'Marapanim', 14),\n" +
    "(2486, 'Marituba', 14),\n" +
    "(2487, 'Medicilândia', 14),\n" +
    "(2488, 'Melgaço', 14),\n" +
    "(2489, 'Mocajuba', 14),\n" +
    "(2490, 'Moju', 14),\n" +
    "(2491, 'Monte Alegre', 14),\n" +
    "(2492, 'Muaná', 14),\n" +
    "(2493, 'Nova Esperança do Piriá', 14),\n" +
    "(2494, 'Nova Ipixuna', 14),\n" +
    "(2495, 'Nova Timboteua', 14),\n" +
    "(2496, 'Novo Progresso', 14),\n" +
    "(2497, 'Novo Repartimento', 14),\n" +
    "(2498, 'Óbidos', 14),\n" +
    "(2499, 'Oeiras do Pará', 14),\n" +
    "(2500, 'Oriximiná', 14),\n" +
    "(2501, 'Ourém', 14),\n" +
    "(2502, 'Ourilândia do Norte', 14),\n" +
    "(2503, 'Pacajá', 14),\n" +
    "(2504, 'Palestina do Pará', 14),\n" +
    "(2505, 'Paragominas', 14),\n" +
    "(2506, 'Parauapebas', 14),\n" +
    "(2507, 'Pau dArco', 14),\n" +
    "(2508, 'Peixe-Boi', 14),\n" +
    "(2509, 'Piçarra', 14),\n" +
    "(2510, 'Placas', 14),\n" +
    "(2511, 'Ponta de Pedras', 14),\n" +
    "(2512, 'Portel', 14),\n" +
    "(2513, 'Porto de Moz', 14),\n" +
    "(2514, 'Prainha', 14),\n" +
    "(2515, 'Primavera', 14),\n" +
    "(2516, 'Quatipuru', 14),\n" +
    "(2517, 'Redenção', 14),\n" +
    "(2518, 'Rio Maria', 14),\n" +
    "(2519, 'Rondon do Pará', 14),\n" +
    "(2520, 'Rurópolis', 14),\n" +
    "(2521, 'Salinópolis', 14),\n" +
    "(2522, 'Salvaterra', 14),\n" +
    "(2523, 'Santa Bárbara do Pará', 14),\n" +
    "(2524, 'Santa Cruz do Arari', 14),\n" +
    "(2525, 'Santa Isabel do Pará', 14);";

const sql6 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(2526, 'Santa Luzia do Pará', 14),\n" +
    "(2527, 'Santa Maria das Barreiras', 14),\n" +
    "(2528, 'Santa Maria do Pará', 14),\n" +
    "(2529, 'Santana do Araguaia', 14),\n" +
    "(2530, 'Santarém', 14),\n" +
    "(2531, 'Santarém Novo', 14),\n" +
    "(2532, 'Santo Antônio do Tauá', 14),\n" +
    "(2533, 'São Caetano de Odivelas', 14),\n" +
    "(2534, 'São Domingos do Araguaia', 14),\n" +
    "(2535, 'São Domingos do Capim', 14),\n" +
    "(2536, 'São Félix do Xingu', 14),\n" +
    "(2537, 'São Francisco do Pará', 14),\n" +
    "(2538, 'São Geraldo do Araguaia', 14),\n" +
    "(2539, 'São João da Ponta', 14),\n" +
    "(2540, 'São João de Pirabas', 14),\n" +
    "(2541, 'São João do Araguaia', 14),\n" +
    "(2542, 'São Miguel do Guamá', 14),\n" +
    "(2543, 'São Sebastião da Boa Vista', 14),\n" +
    "(2544, 'Sapucaia', 14),\n" +
    "(2545, 'Senador José Porfírio', 14),\n" +
    "(2546, 'Soure', 14),\n" +
    "(2547, 'Tailândia', 14),\n" +
    "(2548, 'Terra Alta', 14),\n" +
    "(2549, 'Terra Santa', 14),\n" +
    "(2550, 'Tomé-Açu', 14),\n" +
    "(2551, 'Tracuateua', 14),\n" +
    "(2552, 'Trairão', 14),\n" +
    "(2553, 'Tucumã', 14),\n" +
    "(2554, 'Tucuruí', 14),\n" +
    "(2555, 'Ulianópolis', 14),\n" +
    "(2556, 'Uruará', 14),\n" +
    "(2557, 'Vigia', 14),\n" +
    "(2558, 'Viseu', 14),\n" +
    "(2559, 'Vitória do Xingu', 14),\n" +
    "(2560, 'Xinguara', 14),\n" +
    "(2561, 'Água Branca', 15),\n" +
    "(2562, 'Aguiar', 15),\n" +
    "(2563, 'Alagoa Grande', 15),\n" +
    "(2564, 'Alagoa Nova', 15),\n" +
    "(2565, 'Alagoinha', 15),\n" +
    "(2566, 'Alcantil', 15),\n" +
    "(2567, 'Algodão de Jandaíra', 15),\n" +
    "(2568, 'Alhandra', 15),\n" +
    "(2569, 'Amparo', 15),\n" +
    "(2570, 'Aparecida', 15),\n" +
    "(2571, 'Araçagi', 15),\n" +
    "(2572, 'Arara', 15),\n" +
    "(2573, 'Araruna', 15),\n" +
    "(2574, 'Areia', 15),\n" +
    "(2575, 'Areia de Baraúnas', 15),\n" +
    "(2576, 'Areial', 15),\n" +
    "(2577, 'Aroeiras', 15),\n" +
    "(2578, 'Assunção', 15),\n" +
    "(2579, 'Baía da Traição', 15),\n" +
    "(2580, 'Bananeiras', 15),\n" +
    "(2581, 'Baraúna', 15),\n" +
    "(2582, 'Barra de Santa Rosa', 15),\n" +
    "(2583, 'Barra de Santana', 15),\n" +
    "(2584, 'Barra de São Miguel', 15),\n" +
    "(2585, 'Bayeux', 15),\n" +
    "(2586, 'Belém', 15),\n" +
    "(2587, 'Belém do Brejo do Cruz', 15),\n" +
    "(2588, 'Bernardino Batista', 15),\n" +
    "(2589, 'Boa Ventura', 15),\n" +
    "(2590, 'Boa Vista', 15),\n" +
    "(2591, 'Bom Jesus', 15),\n" +
    "(2592, 'Bom Sucesso', 15),\n" +
    "(2593, 'Bonito de Santa Fé', 15),\n" +
    "(2594, 'Boqueirão', 15),\n" +
    "(2595, 'Borborema', 15),\n" +
    "(2596, 'Brejo do Cruz', 15),\n" +
    "(2597, 'Brejo dos Santos', 15),\n" +
    "(2598, 'Caaporã', 15),\n" +
    "(2599, 'Cabaceiras', 15),\n" +
    "(2600, 'Cabedelo', 15),\n" +
    "(2601, 'Cachoeira dos Índios', 15),\n" +
    "(2602, 'Cacimba de Areia', 15),\n" +
    "(2603, 'Cacimba de Dentro', 15),\n" +
    "(2604, 'Cacimbas', 15),\n" +
    "(2605, 'Caiçara', 15),\n" +
    "(2606, 'Cajazeiras', 15),\n" +
    "(2607, 'Cajazeirinhas', 15),\n" +
    "(2608, 'Caldas Brandão', 15),\n" +
    "(2609, 'Camalaú', 15),\n" +
    "(2610, 'Campina Grande', 15),\n" +
    "(2611, 'Campo de Santana', 15),\n" +
    "(2612, 'Capim', 15),\n" +
    "(2613, 'Caraúbas', 15),\n" +
    "(2614, 'Carrapateira', 15),\n" +
    "(2615, 'Casserengue', 15),\n" +
    "(2616, 'Catingueira', 15),\n" +
    "(2617, 'Catolé do Rocha', 15),\n" +
    "(2618, 'Caturité', 15),\n" +
    "(2619, 'Conceição', 15),\n" +
    "(2620, 'Condado', 15),\n" +
    "(2621, 'Conde', 15),\n" +
    "(2622, 'Congo', 15),\n" +
    "(2623, 'Coremas', 15),\n" +
    "(2624, 'Coxixola', 15),\n" +
    "(2625, 'Cruz do Espírito Santo', 15),\n" +
    "(2626, 'Cubati', 15),\n" +
    "(2627, 'Cuité', 15),\n" +
    "(2628, 'Cuité de Mamanguape', 15),\n" +
    "(2629, 'Cuitegi', 15),\n" +
    "(2630, 'Curral de Cima', 15),\n" +
    "(2631, 'Curral Velho', 15),\n" +
    "(2632, 'Damião', 15),\n" +
    "(2633, 'Desterro', 15),\n" +
    "(2634, 'Diamante', 15),\n" +
    "(2635, 'Dona Inês', 15),\n" +
    "(2636, 'Duas Estradas', 15),\n" +
    "(2637, 'Emas', 15),\n" +
    "(2638, 'Esperança', 15),\n" +
    "(2639, 'Fagundes', 15),\n" +
    "(2640, 'Frei Martinho', 15),\n" +
    "(2641, 'Gado Bravo', 15),\n" +
    "(2642, 'Guarabira', 15),\n" +
    "(2643, 'Gurinhém', 15),\n" +
    "(2644, 'Gurjão', 15),\n" +
    "(2645, 'Ibiara', 15),\n" +
    "(2646, 'Igaracy', 15),\n" +
    "(2647, 'Imaculada', 15),\n" +
    "(2648, 'Ingá', 15),\n" +
    "(2649, 'Itabaiana', 15),\n" +
    "(2650, 'Itaporanga', 15),\n" +
    "(2651, 'Itapororoca', 15),\n" +
    "(2652, 'Itatuba', 15),\n" +
    "(2653, 'Jacaraú', 15),\n" +
    "(2654, 'Jericó', 15),\n" +
    "(2655, 'João Pessoa', 15),\n" +
    "(2656, 'Juarez Távora', 15),\n" +
    "(2657, 'Juazeirinho', 15),\n" +
    "(2658, 'Junco do Seridó', 15),\n" +
    "(2659, 'Juripiranga', 15),\n" +
    "(2660, 'Juru', 15),\n" +
    "(2661, 'Lagoa', 15),\n" +
    "(2662, 'Lagoa de Dentro', 15),\n" +
    "(2663, 'Lagoa Seca', 15),\n" +
    "(2664, 'Lastro', 15),\n" +
    "(2665, 'Livramento', 15),\n" +
    "(2666, 'Logradouro', 15),\n" +
    "(2667, 'Lucena', 15),\n" +
    "(2668, 'Mãe dÁgua', 15),\n" +
    "(2669, 'Malta', 15),\n" +
    "(2670, 'Mamanguape', 15),\n" +
    "(2671, 'Manaíra', 15),\n" +
    "(2672, 'Marcação', 15),\n" +
    "(2673, 'Mari', 15),\n" +
    "(2674, 'Marizópolis', 15),\n" +
    "(2675, 'Massaranduba', 15),\n" +
    "(2676, 'Mataraca', 15),\n" +
    "(2677, 'Matinhas', 15),\n" +
    "(2678, 'Mato Grosso', 15),\n" +
    "(2679, 'Maturéia', 15),\n" +
    "(2680, 'Mogeiro', 15),\n" +
    "(2681, 'Montadas', 15),\n" +
    "(2682, 'Monte Horebe', 15),\n" +
    "(2683, 'Monteiro', 15),\n" +
    "(2684, 'Mulungu', 15),\n" +
    "(2685, 'Natuba', 15),\n" +
    "(2686, 'Nazarezinho', 15),\n" +
    "(2687, 'Nova Floresta', 15),\n" +
    "(2688, 'Nova Olinda', 15),\n" +
    "(2689, 'Nova Palmeira', 15),\n" +
    "(2690, 'Olho dÁgua', 15),\n" +
    "(2691, 'Olivedos', 15),\n" +
    "(2692, 'Ouro Velho', 15),\n" +
    "(2693, 'Parari', 15),\n" +
    "(2694, 'Passagem', 15),\n" +
    "(2695, 'Patos', 15),\n" +
    "(2696, 'Paulista', 15),\n" +
    "(2697, 'Pedra Branca', 15),\n" +
    "(2698, 'Pedra Lavrada', 15),\n" +
    "(2699, 'Pedras de Fogo', 15),\n" +
    "(2700, 'Pedro Régis', 15),\n" +
    "(2701, 'Piancó', 15),\n" +
    "(2702, 'Picuí', 15),\n" +
    "(2703, 'Pilar', 15),\n" +
    "(2704, 'Pilões', 15),\n" +
    "(2705, 'Pilõezinhos', 15),\n" +
    "(2706, 'Pirpirituba', 15),\n" +
    "(2707, 'Pitimbu', 15),\n" +
    "(2708, 'Pocinhos', 15),\n" +
    "(2709, 'Poço Dantas', 15),\n" +
    "(2710, 'Poço de José de Moura', 15),\n" +
    "(2711, 'Pombal', 15),\n" +
    "(2712, 'Prata', 15),\n" +
    "(2713, 'Princesa Isabel', 15),\n" +
    "(2714, 'Puxinanã', 15),\n" +
    "(2715, 'Queimadas', 15),\n" +
    "(2716, 'Quixabá', 15),\n" +
    "(2717, 'Remígio', 15),\n" +
    "(2718, 'Riachão', 15),\n" +
    "(2719, 'Riachão do Bacamarte', 15),\n" +
    "(2720, 'Riachão do Poço', 15),\n" +
    "(2721, 'Riacho de Santo Antônio', 15),\n" +
    "(2722, 'Riacho dos Cavalos', 15),\n" +
    "(2723, 'Rio Tinto', 15),\n" +
    "(2724, 'Salgadinho', 15),\n" +
    "(2725, 'Salgado de São Félix', 15),\n" +
    "(2726, 'Santa Cecília', 15),\n" +
    "(2727, 'Santa Cruz', 15),\n" +
    "(2728, 'Santa Helena', 15),\n" +
    "(2729, 'Santa Inês', 15),\n" +
    "(2730, 'Santa Luzia', 15),\n" +
    "(2731, 'Santa Rita', 15),\n" +
    "(2732, 'Santa Teresinha', 15),\n" +
    "(2733, 'Santana de Mangueira', 15),\n" +
    "(2734, 'Santana dos Garrotes', 15),\n" +
    "(2735, 'Santarém', 15),\n" +
    "(2736, 'Santo André', 15),\n" +
    "(2737, 'São Bentinho', 15),\n" +
    "(2738, 'São Bento', 15),\n" +
    "(2739, 'São Domingos de Pombal', 15),\n" +
    "(2740, 'São Domingos do Cariri', 15),\n" +
    "(2741, 'São Francisco', 15),\n" +
    "(2742, 'São João do Cariri', 15),\n" +
    "(2743, 'São João do Rio do Peixe', 15),\n" +
    "(2744, 'São João do Tigre', 15),\n" +
    "(2745, 'São José da Lagoa Tapada', 15),\n" +
    "(2746, 'São José de Caiana', 15),\n" +
    "(2747, 'São José de Espinharas', 15),\n" +
    "(2748, 'São José de Piranhas', 15),\n" +
    "(2749, 'São José de Princesa', 15),\n" +
    "(2750, 'São José do Bonfim', 15),\n" +
    "(2751, 'São José do Brejo do Cruz', 15),\n" +
    "(2752, 'São José do Sabugi', 15),\n" +
    "(2753, 'São José dos Cordeiros', 15),\n" +
    "(2754, 'São José dos Ramos', 15),\n" +
    "(2755, 'São Mamede', 15),\n" +
    "(2756, 'São Miguel de Taipu', 15),\n" +
    "(2757, 'São Sebastião de Lagoa de Roça', 15),\n" +
    "(2758, 'São Sebastião do Umbuzeiro', 15),\n" +
    "(2759, 'Sapé', 15),\n" +
    "(2760, 'Seridó', 15),\n" +
    "(2761, 'Serra Branca', 15),\n" +
    "(2762, 'Serra da Raiz', 15),\n" +
    "(2763, 'Serra Grande', 15),\n" +
    "(2764, 'Serra Redonda', 15),\n" +
    "(2765, 'Serraria', 15),\n" +
    "(2766, 'Sertãozinho', 15),\n" +
    "(2767, 'Sobrado', 15),\n" +
    "(2768, 'Solânea', 15),\n" +
    "(2769, 'Soledade', 15),\n" +
    "(2770, 'Sossêgo', 15),\n" +
    "(2771, 'Sousa', 15),\n" +
    "(2772, 'Sumé', 15),\n" +
    "(2773, 'Taperoá', 15),\n" +
    "(2774, 'Tavares', 15),\n" +
    "(2775, 'Teixeira', 15),\n" +
    "(2776, 'Tenório', 15),\n" +
    "(2777, 'Triunfo', 15),\n" +
    "(2778, 'Uiraúna', 15),\n" +
    "(2779, 'Umbuzeiro', 15),\n" +
    "(2780, 'Várzea', 15),\n" +
    "(2781, 'Vieirópolis', 15),\n" +
    "(2782, 'Vista Serrana', 15),\n" +
    "(2783, 'Zabelê', 15),\n" +
    "(2784, 'Abatiá', 18),\n" +
    "(2785, 'Adrianópolis', 18),\n" +
    "(2786, 'Agudos do Sul', 18),\n" +
    "(2787, 'Almirante Tamandaré', 18),\n" +
    "(2788, 'Altamira do Paraná', 18),\n" +
    "(2789, 'Alto Paraíso', 18),\n" +
    "(2790, 'Alto Paraná', 18),\n" +
    "(2791, 'Alto Piquiri', 18),\n" +
    "(2792, 'Altônia', 18),\n" +
    "(2793, 'Alvorada do Sul', 18),\n" +
    "(2794, 'Amaporã', 18),\n" +
    "(2795, 'Ampére', 18),\n" +
    "(2796, 'Anahy', 18),\n" +
    "(2797, 'Andirá', 18),\n" +
    "(2798, 'Ângulo', 18),\n" +
    "(2799, 'Antonina', 18),\n" +
    "(2800, 'Antônio Olinto', 18),\n" +
    "(2801, 'Apucarana', 18),\n" +
    "(2802, 'Arapongas', 18),\n" +
    "(2803, 'Arapoti', 18),\n" +
    "(2804, 'Arapuã', 18),\n" +
    "(2805, 'Araruna', 18),\n" +
    "(2806, 'Araucária', 18),\n" +
    "(2807, 'Ariranha do Ivaí', 18),\n" +
    "(2808, 'Assaí', 18),\n" +
    "(2809, 'Assis Chateaubriand', 18),\n" +
    "(2810, 'Astorga', 18),\n" +
    "(2811, 'Atalaia', 18),\n" +
    "(2812, 'Balsa Nova', 18),\n" +
    "(2813, 'Bandeirantes', 18),\n" +
    "(2814, 'Barbosa Ferraz', 18),\n" +
    "(2815, 'Barra do Jacaré', 18),\n" +
    "(2816, 'Barracão', 18),\n" +
    "(2817, 'Bela Vista da Caroba', 18),\n" +
    "(2818, 'Bela Vista do Paraíso', 18),\n" +
    "(2819, 'Bituruna', 18),\n" +
    "(2820, 'Boa Esperança', 18),\n" +
    "(2821, 'Boa Esperança do Iguaçu', 18),\n" +
    "(2822, 'Boa Ventura de São Roque', 18),\n" +
    "(2823, 'Boa Vista da Aparecida', 18),\n" +
    "(2824, 'Bocaiúva do Sul', 18),\n" +
    "(2825, 'Bom Jesus do Sul', 18),\n" +
    "(2826, 'Bom Sucesso', 18),\n" +
    "(2827, 'Bom Sucesso do Sul', 18),\n" +
    "(2828, 'Borrazópolis', 18),\n" +
    "(2829, 'Braganey', 18),\n" +
    "(2830, 'Brasilândia do Sul', 18),\n" +
    "(2831, 'Cafeara', 18),\n" +
    "(2832, 'Cafelândia', 18),\n" +
    "(2833, 'Cafezal do Sul', 18),\n" +
    "(2834, 'Califórnia', 18),\n" +
    "(2835, 'Cambará', 18),\n" +
    "(2836, 'Cambé', 18),\n" +
    "(2837, 'Cambira', 18),\n" +
    "(2838, 'Campina da Lagoa', 18),\n" +
    "(2839, 'Campina do Simão', 18),\n" +
    "(2840, 'Campina Grande do Sul', 18),\n" +
    "(2841, 'Campo Bonito', 18),\n" +
    "(2842, 'Campo do Tenente', 18),\n" +
    "(2843, 'Campo Largo', 18),\n" +
    "(2844, 'Campo Magro', 18),\n" +
    "(2845, 'Campo Mourão', 18),\n" +
    "(2846, 'Cândido de Abreu', 18),\n" +
    "(2847, 'Candói', 18),\n" +
    "(2848, 'Cantagalo', 18),\n" +
    "(2849, 'Capanema', 18),\n" +
    "(2850, 'Capitão Leônidas Marques', 18),\n" +
    "(2851, 'Carambeí', 18),\n" +
    "(2852, 'Carlópolis', 18),\n" +
    "(2853, 'Cascavel', 18),\n" +
    "(2854, 'Castro', 18),\n" +
    "(2855, 'Catanduvas', 18),\n" +
    "(2856, 'Centenário do Sul', 18),\n" +
    "(2857, 'Cerro Azul', 18),\n" +
    "(2858, 'Céu Azul', 18),\n" +
    "(2859, 'Chopinzinho', 18),\n" +
    "(2860, 'Cianorte', 18),\n" +
    "(2861, 'Cidade Gaúcha', 18),\n" +
    "(2862, 'Clevelândia', 18),\n" +
    "(2863, 'Colombo', 18),\n" +
    "(2864, 'Colorado', 18),\n" +
    "(2865, 'Congonhinhas', 18),\n" +
    "(2866, 'Conselheiro Mairinck', 18),\n" +
    "(2867, 'Contenda', 18),\n" +
    "(2868, 'Corbélia', 18),\n" +
    "(2869, 'Cornélio Procópio', 18),\n" +
    "(2870, 'Coronel Domingos Soares', 18),\n" +
    "(2871, 'Coronel Vivida', 18),\n" +
    "(2872, 'Corumbataí do Sul', 18),\n" +
    "(2873, 'Cruz Machado', 18),\n" +
    "(2874, 'Cruzeiro do Iguaçu', 18),\n" +
    "(2875, 'Cruzeiro do Oeste', 18),\n" +
    "(2876, 'Cruzeiro do Sul', 18),\n" +
    "(2877, 'Cruzmaltina', 18),\n" +
    "(2878, 'Curitiba', 18),\n" +
    "(2879, 'Curiúva', 18),\n" +
    "(2880, 'Diamante dOeste', 18),\n" +
    "(2881, 'Diamante do Norte', 18),\n" +
    "(2882, 'Diamante do Sul', 18),\n" +
    "(2883, 'Dois Vizinhos', 18),\n" +
    "(2884, 'Douradina', 18),\n" +
    "(2885, 'Doutor Camargo', 18),\n" +
    "(2886, 'Doutor Ulysses', 18),\n" +
    "(2887, 'Enéas Marques', 18),\n" +
    "(2888, 'Engenheiro Beltrão', 18),\n" +
    "(2889, 'Entre Rios do Oeste', 18),\n" +
    "(2890, 'Esperança Nova', 18),\n" +
    "(2891, 'Espigão Alto do Iguaçu', 18),\n" +
    "(2892, 'Farol', 18),\n" +
    "(2893, 'Faxinal', 18),\n" +
    "(2894, 'Fazenda Rio Grande', 18),\n" +
    "(2895, 'Fênix', 18),\n" +
    "(2896, 'Fernandes Pinheiro', 18),\n" +
    "(2897, 'Figueira', 18),\n" +
    "(2898, 'Flor da Serra do Sul', 18),\n" +
    "(2899, 'Floraí', 18),\n" +
    "(2900, 'Floresta', 18),\n" +
    "(2901, 'Florestópolis', 18),\n" +
    "(2902, 'Flórida', 18),\n" +
    "(2903, 'Formosa do Oeste', 18),\n" +
    "(2904, 'Foz do Iguaçu', 18),\n" +
    "(2905, 'Foz do Jordão', 18),\n" +
    "(2906, 'Francisco Alves', 18),\n" +
    "(2907, 'Francisco Beltrão', 18),\n" +
    "(2908, 'General Carneiro', 18),\n" +
    "(2909, 'Godoy Moreira', 18),\n" +
    "(2910, 'Goioerê', 18),\n" +
    "(2911, 'Goioxim', 18),\n" +
    "(2912, 'Grandes Rios', 18),\n" +
    "(2913, 'Guaíra', 18),\n" +
    "(2914, 'Guairaçá', 18),\n" +
    "(2915, 'Guamiranga', 18),\n" +
    "(2916, 'Guapirama', 18),\n" +
    "(2917, 'Guaporema', 18),\n" +
    "(2918, 'Guaraci', 18),\n" +
    "(2919, 'Guaraniaçu', 18),\n" +
    "(2920, 'Guarapuava', 18),\n" +
    "(2921, 'Guaraqueçaba', 18),\n" +
    "(2922, 'Guaratuba', 18),\n" +
    "(2923, 'Honório Serpa', 18),\n" +
    "(2924, 'Ibaiti', 18),\n" +
    "(2925, 'Ibema', 18),\n" +
    "(2926, 'Ibiporã', 18),\n" +
    "(2927, 'Icaraíma', 18),\n" +
    "(2928, 'Iguaraçu', 18),\n" +
    "(2929, 'Iguatu', 18),\n" +
    "(2930, 'Imbaú', 18),\n" +
    "(2931, 'Imbituva', 18),\n" +
    "(2932, 'Inácio Martins', 18),\n" +
    "(2933, 'Inajá', 18),\n" +
    "(2934, 'Indianópolis', 18),\n" +
    "(2935, 'Ipiranga', 18),\n" +
    "(2936, 'Iporã', 18),\n" +
    "(2937, 'Iracema do Oeste', 18),\n" +
    "(2938, 'Irati', 18),\n" +
    "(2939, 'Iretama', 18),\n" +
    "(2940, 'Itaguajé', 18),\n" +
    "(2941, 'Itaipulândia', 18),\n" +
    "(2942, 'Itambaracá', 18),\n" +
    "(2943, 'Itambé', 18),\n" +
    "(2944, 'Itapejara dOeste', 18),\n" +
    "(2945, 'Itaperuçu', 18),\n" +
    "(2946, 'Itaúna do Sul', 18),\n" +
    "(2947, 'Ivaí', 18),\n" +
    "(2948, 'Ivaiporã', 18),\n" +
    "(2949, 'Ivaté', 18),\n" +
    "(2950, 'Ivatuba', 18),\n" +
    "(2951, 'Jaboti', 18),\n" +
    "(2952, 'Jacarezinho', 18),\n" +
    "(2953, 'Jaguapitã', 18),\n" +
    "(2954, 'Jaguariaíva', 18),\n" +
    "(2955, 'Jandaia do Sul', 18),\n" +
    "(2956, 'Janiópolis', 18),\n" +
    "(2957, 'Japira', 18),\n" +
    "(2958, 'Japurá', 18),\n" +
    "(2959, 'Jardim Alegre', 18),\n" +
    "(2960, 'Jardim Olinda', 18),\n" +
    "(2961, 'Jataizinho', 18),\n" +
    "(2962, 'Jesuítas', 18),\n" +
    "(2963, 'Joaquim Távora', 18),\n" +
    "(2964, 'Jundiaí do Sul', 18),\n" +
    "(2965, 'Juranda', 18),\n" +
    "(2966, 'Jussara', 18),\n" +
    "(2967, 'Kaloré', 18),\n" +
    "(2968, 'Lapa', 18),\n" +
    "(2969, 'Laranjal', 18),\n" +
    "(2970, 'Laranjeiras do Sul', 18),\n" +
    "(2971, 'Leópolis', 18),\n" +
    "(2972, 'Lidianópolis', 18),\n" +
    "(2973, 'Lindoeste', 18),\n" +
    "(2974, 'Loanda', 18),\n" +
    "(2975, 'Lobato', 18),\n" +
    "(2976, 'Londrina', 18),\n" +
    "(2977, 'Luiziana', 18),\n" +
    "(2978, 'Lunardelli', 18),\n" +
    "(2979, 'Lupionópolis', 18),\n" +
    "(2980, 'Mallet', 18),\n" +
    "(2981, 'Mamborê', 18),\n" +
    "(2982, 'Mandaguaçu', 18),\n" +
    "(2983, 'Mandaguari', 18),\n" +
    "(2984, 'Mandirituba', 18),\n" +
    "(2985, 'Manfrinópolis', 18),\n" +
    "(2986, 'Mangueirinha', 18),\n" +
    "(2987, 'Manoel Ribas', 18),\n" +
    "(2988, 'Marechal Cândido Rondon', 18),\n" +
    "(2989, 'Maria Helena', 18),\n" +
    "(2990, 'Marialva', 18),\n" +
    "(2991, 'Marilândia do Sul', 18),\n" +
    "(2992, 'Marilena', 18),\n" +
    "(2993, 'Mariluz', 18),\n" +
    "(2994, 'Maringá', 18),\n" +
    "(2995, 'Mariópolis', 18),\n" +
    "(2996, 'Maripá', 18),\n" +
    "(2997, 'Marmeleiro', 18),\n" +
    "(2998, 'Marquinho', 18),\n" +
    "(2999, 'Marumbi', 18),\n" +
    "(3000, 'Matelândia', 18),\n" +
    "(3001, 'Matinhos', 18),\n" +
    "(3002, 'Mato Rico', 18),\n" +
    "(3003, 'Mauá da Serra', 18),\n" +
    "(3004, 'Medianeira', 18),\n" +
    "(3005, 'Mercedes', 18),\n" +
    "(3006, 'Mirador', 18),\n" +
    "(3007, 'Miraselva', 18),\n" +
    "(3008, 'Missal', 18),\n" +
    "(3009, 'Moreira Sales', 18),\n" +
    "(3010, 'Morretes', 18),\n" +
    "(3011, 'Munhoz de Melo', 18),\n" +
    "(3012, 'Nossa Senhora das Graças', 18),\n" +
    "(3013, 'Nova Aliança do Ivaí', 18),\n" +
    "(3014, 'Nova América da Colina', 18),\n" +
    "(3015, 'Nova Aurora', 18),\n" +
    "(3016, 'Nova Cantu', 18),\n" +
    "(3017, 'Nova Esperança', 18);";

const sql7 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(3018, 'Nova Esperança do Sudoeste', 18),\n" +
    "(3019, 'Nova Fátima', 18),\n" +
    "(3020, 'Nova Laranjeiras', 18),\n" +
    "(3021, 'Nova Londrina', 18),\n" +
    "(3022, 'Nova Olímpia', 18),\n" +
    "(3023, 'Nova Prata do Iguaçu', 18),\n" +
    "(3024, 'Nova Santa Bárbara', 18),\n" +
    "(3025, 'Nova Santa Rosa', 18),\n" +
    "(3026, 'Nova Tebas', 18),\n" +
    "(3027, 'Novo Itacolomi', 18),\n" +
    "(3028, 'Ortigueira', 18),\n" +
    "(3029, 'Ourizona', 18),\n" +
    "(3030, 'Ouro Verde do Oeste', 18),\n" +
    "(3031, 'Paiçandu', 18),\n" +
    "(3032, 'Palmas', 18),\n" +
    "(3033, 'Palmeira', 18),\n" +
    "(3034, 'Palmital', 18),\n" +
    "(3035, 'Palotina', 18),\n" +
    "(3036, 'Paraíso do Norte', 18),\n" +
    "(3037, 'Paranacity', 18),\n" +
    "(3038, 'Paranaguá', 18),\n" +
    "(3039, 'Paranapoema', 18),\n" +
    "(3040, 'Paranavaí', 18),\n" +
    "(3041, 'Pato Bragado', 18),\n" +
    "(3042, 'Pato Branco', 18),\n" +
    "(3043, 'Paula Freitas', 18),\n" +
    "(3044, 'Paulo Frontin', 18),\n" +
    "(3045, 'Peabiru', 18),\n" +
    "(3046, 'Perobal', 18),\n" +
    "(3047, 'Pérola', 18),\n" +
    "(3048, 'Pérola dOeste', 18),\n" +
    "(3049, 'Piên', 18),\n" +
    "(3050, 'Pinhais', 18),\n" +
    "(3051, 'Pinhal de São Bento', 18),\n" +
    "(3052, 'Pinhalão', 18),\n" +
    "(3053, 'Pinhão', 18),\n" +
    "(3054, 'Piraí do Sul', 18),\n" +
    "(3055, 'Piraquara', 18),\n" +
    "(3056, 'Pitanga', 18),\n" +
    "(3057, 'Pitangueiras', 18),\n" +
    "(3058, 'Planaltina do Paraná', 18),\n" +
    "(3059, 'Planalto', 18),\n" +
    "(3060, 'Ponta Grossa', 18),\n" +
    "(3061, 'Pontal do Paraná', 18),\n" +
    "(3062, 'Porecatu', 18),\n" +
    "(3063, 'Porto Amazonas', 18),\n" +
    "(3064, 'Porto Barreiro', 18),\n" +
    "(3065, 'Porto Rico', 18),\n" +
    "(3066, 'Porto Vitória', 18),\n" +
    "(3067, 'Prado Ferreira', 18),\n" +
    "(3068, 'Pranchita', 18),\n" +
    "(3069, 'Presidente Castelo Branco', 18),\n" +
    "(3070, 'Primeiro de Maio', 18),\n" +
    "(3071, 'Prudentópolis', 18),\n" +
    "(3072, 'Quarto Centenário', 18),\n" +
    "(3073, 'Quatiguá', 18),\n" +
    "(3074, 'Quatro Barras', 18),\n" +
    "(3075, 'Quatro Pontes', 18),\n" +
    "(3076, 'Quedas do Iguaçu', 18),\n" +
    "(3077, 'Querência do Norte', 18),\n" +
    "(3078, 'Quinta do Sol', 18),\n" +
    "(3079, 'Quitandinha', 18),\n" +
    "(3080, 'Ramilândia', 18),\n" +
    "(3081, 'Rancho Alegre', 18),\n" +
    "(3082, 'Rancho Alegre dOeste', 18),\n" +
    "(3083, 'Realeza', 18),\n" +
    "(3084, 'Rebouças', 18),\n" +
    "(3085, 'Renascença', 18),\n" +
    "(3086, 'Reserva', 18),\n" +
    "(3087, 'Reserva do Iguaçu', 18),\n" +
    "(3088, 'Ribeirão Claro', 18),\n" +
    "(3089, 'Ribeirão do Pinhal', 18),\n" +
    "(3090, 'Rio Azul', 18),\n" +
    "(3091, 'Rio Bom', 18),\n" +
    "(3092, 'Rio Bonito do Iguaçu', 18),\n" +
    "(3093, 'Rio Branco do Ivaí', 18),\n" +
    "(3094, 'Rio Branco do Sul', 18),\n" +
    "(3095, 'Rio Negro', 18),\n" +
    "(3096, 'Rolândia', 18),\n" +
    "(3097, 'Roncador', 18),\n" +
    "(3098, 'Rondon', 18),\n" +
    "(3099, 'Rosário do Ivaí', 18),\n" +
    "(3100, 'Sabáudia', 18),\n" +
    "(3101, 'Salgado Filho', 18),\n" +
    "(3102, 'Salto do Itararé', 18),\n" +
    "(3103, 'Salto do Lontra', 18),\n" +
    "(3104, 'Santa Amélia', 18),\n" +
    "(3105, 'Santa Cecília do Pavão', 18),\n" +
    "(3106, 'Santa Cruz de Monte Castelo', 18),\n" +
    "(3107, 'Santa Fé', 18),\n" +
    "(3108, 'Santa Helena', 18),\n" +
    "(3109, 'Santa Inês', 18),\n" +
    "(3110, 'Santa Isabel do Ivaí', 18),\n" +
    "(3111, 'Santa Izabel do Oeste', 18),\n" +
    "(3112, 'Santa Lúcia', 18),\n" +
    "(3113, 'Santa Maria do Oeste', 18),\n" +
    "(3114, 'Santa Mariana', 18),\n" +
    "(3115, 'Santa Mônica', 18),\n" +
    "(3116, 'Santa Tereza do Oeste', 18),\n" +
    "(3117, 'Santa Terezinha de Itaipu', 18),\n" +
    "(3118, 'Santana do Itararé', 18),\n" +
    "(3119, 'Santo Antônio da Platina', 18),\n" +
    "(3120, 'Santo Antônio do Caiuá', 18),\n" +
    "(3121, 'Santo Antônio do Paraíso', 18),\n" +
    "(3122, 'Santo Antônio do Sudoeste', 18),\n" +
    "(3123, 'Santo Inácio', 18),\n" +
    "(3124, 'São Carlos do Ivaí', 18),\n" +
    "(3125, 'São Jerônimo da Serra', 18),\n" +
    "(3126, 'São João', 18),\n" +
    "(3127, 'São João do Caiuá', 18),\n" +
    "(3128, 'São João do Ivaí', 18),\n" +
    "(3129, 'São João do Triunfo', 18),\n" +
    "(3130, 'São Jorge dOeste', 18),\n" +
    "(3131, 'São Jorge do Ivaí', 18),\n" +
    "(3132, 'São Jorge do Patrocínio', 18),\n" +
    "(3133, 'São José da Boa Vista', 18),\n" +
    "(3134, 'São José das Palmeiras', 18),\n" +
    "(3135, 'São José dos Pinhais', 18),\n" +
    "(3136, 'São Manoel do Paraná', 18),\n" +
    "(3137, 'São Mateus do Sul', 18),\n" +
    "(3138, 'São Miguel do Iguaçu', 18),\n" +
    "(3139, 'São Pedro do Iguaçu', 18),\n" +
    "(3140, 'São Pedro do Ivaí', 18),\n" +
    "(3141, 'São Pedro do Paraná', 18),\n" +
    "(3142, 'São Sebastião da Amoreira', 18),\n" +
    "(3143, 'São Tomé', 18),\n" +
    "(3144, 'Sapopema', 18),\n" +
    "(3145, 'Sarandi', 18),\n" +
    "(3146, 'Saudade do Iguaçu', 18),\n" +
    "(3147, 'Sengés', 18),\n" +
    "(3148, 'Serranópolis do Iguaçu', 18),\n" +
    "(3149, 'Sertaneja', 18),\n" +
    "(3150, 'Sertanópolis', 18),\n" +
    "(3151, 'Siqueira Campos', 18),\n" +
    "(3152, 'Sulina', 18),\n" +
    "(3153, 'Tamarana', 18),\n" +
    "(3154, 'Tamboara', 18),\n" +
    "(3155, 'Tapejara', 18),\n" +
    "(3156, 'Tapira', 18),\n" +
    "(3157, 'Teixeira Soares', 18),\n" +
    "(3158, 'Telêmaco Borba', 18),\n" +
    "(3159, 'Terra Boa', 18),\n" +
    "(3160, 'Terra Rica', 18),\n" +
    "(3161, 'Terra Roxa', 18),\n" +
    "(3162, 'Tibagi', 18),\n" +
    "(3163, 'Tijucas do Sul', 18),\n" +
    "(3164, 'Toledo', 18),\n" +
    "(3165, 'Tomazina', 18),\n" +
    "(3166, 'Três Barras do Paraná', 18),\n" +
    "(3167, 'Tunas do Paraná', 18),\n" +
    "(3168, 'Tuneiras do Oeste', 18),\n" +
    "(3169, 'Tupãssi', 18),\n" +
    "(3170, 'Turvo', 18),\n" +
    "(3171, 'Ubiratã', 18),\n" +
    "(3172, 'Umuarama', 18),\n" +
    "(3173, 'União da Vitória', 18),\n" +
    "(3174, 'Uniflor', 18),\n" +
    "(3175, 'Uraí', 18),\n" +
    "(3176, 'Ventania', 18),\n" +
    "(3177, 'Vera Cruz do Oeste', 18),\n" +
    "(3178, 'Verê', 18),\n" +
    "(3179, 'Virmond', 18),\n" +
    "(3180, 'Vitorino', 18),\n" +
    "(3181, 'Wenceslau Braz', 18),\n" +
    "(3182, 'Xambrê', 18),\n" +
    "(3183, 'Abreu e Lima', 16),\n" +
    "(3184, 'Afogados da Ingazeira', 16),\n" +
    "(3185, 'Afrânio', 16),\n" +
    "(3186, 'Agrestina', 16),\n" +
    "(3187, 'Água Preta', 16),\n" +
    "(3188, 'Águas Belas', 16),\n" +
    "(3189, 'Alagoinha', 16),\n" +
    "(3190, 'Aliança', 16),\n" +
    "(3191, 'Altinho', 16),\n" +
    "(3192, 'Amaraji', 16),\n" +
    "(3193, 'Angelim', 16),\n" +
    "(3194, 'Araçoiaba', 16),\n" +
    "(3195, 'Araripina', 16),\n" +
    "(3196, 'Arcoverde', 16),\n" +
    "(3197, 'Barra de Guabiraba', 16),\n" +
    "(3198, 'Barreiros', 16),\n" +
    "(3199, 'Belém de Maria', 16),\n" +
    "(3200, 'Belém de São Francisco', 16),\n" +
    "(3201, 'Belo Jardim', 16),\n" +
    "(3202, 'Betânia', 16),\n" +
    "(3203, 'Bezerros', 16),\n" +
    "(3204, 'Bodocó', 16),\n" +
    "(3205, 'Bom Conselho', 16),\n" +
    "(3206, 'Bom Jardim', 16),\n" +
    "(3207, 'Bonito', 16),\n" +
    "(3208, 'Brejão', 16),\n" +
    "(3209, 'Brejinho', 16),\n" +
    "(3210, 'Brejo da Madre de Deus', 16),\n" +
    "(3211, 'Buenos Aires', 16),\n" +
    "(3212, 'Buíque', 16),\n" +
    "(3213, 'Cabo de Santo Agostinho', 16),\n" +
    "(3214, 'Cabrobó', 16),\n" +
    "(3215, 'Cachoeirinha', 16),\n" +
    "(3216, 'Caetés', 16),\n" +
    "(3217, 'Calçado', 16),\n" +
    "(3218, 'Calumbi', 16),\n" +
    "(3219, 'Camaragibe', 16),\n" +
    "(3220, 'Camocim de São Félix', 16),\n" +
    "(3221, 'Camutanga', 16),\n" +
    "(3222, 'Canhotinho', 16),\n" +
    "(3223, 'Capoeiras', 16),\n" +
    "(3224, 'Carnaíba', 16),\n" +
    "(3225, 'Carnaubeira da Penha', 16),\n" +
    "(3226, 'Carpina', 16),\n" +
    "(3227, 'Caruaru', 16),\n" +
    "(3228, 'Casinhas', 16),\n" +
    "(3229, 'Catende', 16),\n" +
    "(3230, 'Cedro', 16),\n" +
    "(3231, 'Chã de Alegria', 16),\n" +
    "(3232, 'Chã Grande', 16),\n" +
    "(3233, 'Condado', 16),\n" +
    "(3234, 'Correntes', 16),\n" +
    "(3235, 'Cortês', 16),\n" +
    "(3236, 'Cumaru', 16),\n" +
    "(3237, 'Cupira', 16),\n" +
    "(3238, 'Custódia', 16),\n" +
    "(3239, 'Dormentes', 16),\n" +
    "(3240, 'Escada', 16),\n" +
    "(3241, 'Exu', 16),\n" +
    "(3242, 'Feira Nova', 16),\n" +
    "(3243, 'Fernando de Noronha', 16),\n" +
    "(3244, 'Ferreiros', 16),\n" +
    "(3245, 'Flores', 16),\n" +
    "(3246, 'Floresta', 16),\n" +
    "(3247, 'Frei Miguelinho', 16),\n" +
    "(3248, 'Gameleira', 16),\n" +
    "(3249, 'Garanhuns', 16),\n" +
    "(3250, 'Glória do Goitá', 16),\n" +
    "(3251, 'Goiana', 16),\n" +
    "(3252, 'Granito', 16),\n" +
    "(3253, 'Gravatá', 16),\n" +
    "(3254, 'Iati', 16),\n" +
    "(3255, 'Ibimirim', 16),\n" +
    "(3256, 'Ibirajuba', 16),\n" +
    "(3257, 'Igarassu', 16),\n" +
    "(3258, 'Iguaraci', 16),\n" +
    "(3259, 'Ilha de Itamaracá', 16),\n" +
    "(3260, 'Inajá', 16),\n" +
    "(3261, 'Ingazeira', 16),\n" +
    "(3262, 'Ipojuca', 16),\n" +
    "(3263, 'Ipubi', 16),\n" +
    "(3264, 'Itacuruba', 16),\n" +
    "(3265, 'Itaíba', 16),\n" +
    "(3266, 'Itambé', 16),\n" +
    "(3267, 'Itapetim', 16),\n" +
    "(3268, 'Itapissuma', 16),\n" +
    "(3269, 'Itaquitinga', 16),\n" +
    "(3270, 'Jaboatão dos Guararapes', 16),\n" +
    "(3271, 'Jaqueira', 16),\n" +
    "(3272, 'Jataúba', 16),\n" +
    "(3273, 'Jatobá', 16),\n" +
    "(3274, 'João Alfredo', 16),\n" +
    "(3275, 'Joaquim Nabuco', 16),\n" +
    "(3276, 'Jucati', 16),\n" +
    "(3277, 'Jupi', 16),\n" +
    "(3278, 'Jurema', 16),\n" +
    "(3279, 'Lagoa do Carro', 16),\n" +
    "(3280, 'Lagoa do Itaenga', 16),\n" +
    "(3281, 'Lagoa do Ouro', 16),\n" +
    "(3282, 'Lagoa dos Gatos', 16),\n" +
    "(3283, 'Lagoa Grande', 16),\n" +
    "(3284, 'Lajedo', 16),\n" +
    "(3285, 'Limoeiro', 16),\n" +
    "(3286, 'Macaparana', 16),\n" +
    "(3287, 'Machados', 16),\n" +
    "(3288, 'Manari', 16),\n" +
    "(3289, 'Maraial', 16),\n" +
    "(3290, 'Mirandiba', 16),\n" +
    "(3291, 'Moreilândia', 16),\n" +
    "(3292, 'Moreno', 16),\n" +
    "(3293, 'Nazaré da Mata', 16),\n" +
    "(3294, 'Olinda', 16),\n" +
    "(3295, 'Orobó', 16),\n" +
    "(3296, 'Orocó', 16),\n" +
    "(3297, 'Ouricuri', 16),\n" +
    "(3298, 'Palmares', 16),\n" +
    "(3299, 'Palmeirina', 16),\n" +
    "(3300, 'Panelas', 16),\n" +
    "(3301, 'Paranatama', 16),\n" +
    "(3302, 'Parnamirim', 16),\n" +
    "(3303, 'Passira', 16),\n" +
    "(3304, 'Paudalho', 16),\n" +
    "(3305, 'Paulista', 16),\n" +
    "(3306, 'Pedra', 16),\n" +
    "(3307, 'Pesqueira', 16),\n" +
    "(3308, 'Petrolândia', 16),\n" +
    "(3309, 'Petrolina', 16),\n" +
    "(3310, 'Poção', 16),\n" +
    "(3311, 'Pombos', 16),\n" +
    "(3312, 'Primavera', 16),\n" +
    "(3313, 'Quipapá', 16),\n" +
    "(3314, 'Quixaba', 16),\n" +
    "(3315, 'Recife', 16),\n" +
    "(3316, 'Riacho das Almas', 16),\n" +
    "(3317, 'Ribeirão', 16),\n" +
    "(3318, 'Rio Formoso', 16),\n" +
    "(3319, 'Sairé', 16),\n" +
    "(3320, 'Salgadinho', 16),\n" +
    "(3321, 'Salgueiro', 16),\n" +
    "(3322, 'Saloá', 16),\n" +
    "(3323, 'Sanharó', 16),\n" +
    "(3324, 'Santa Cruz', 16),\n" +
    "(3325, 'Santa Cruz da Baixa Verde', 16),\n" +
    "(3326, 'Santa Cruz do Capibaribe', 16),\n" +
    "(3327, 'Santa Filomena', 16),\n" +
    "(3328, 'Santa Maria da Boa Vista', 16),\n" +
    "(3329, 'Santa Maria do Cambucá', 16),\n" +
    "(3330, 'Santa Terezinha', 16),\n" +
    "(3331, 'São Benedito do Sul', 16),\n" +
    "(3332, 'São Bento do Una', 16),\n" +
    "(3333, 'São Caitano', 16),\n" +
    "(3334, 'São João', 16),\n" +
    "(3335, 'São Joaquim do Monte', 16),\n" +
    "(3336, 'São José da Coroa Grande', 16),\n" +
    "(3337, 'São José do Belmonte', 16),\n" +
    "(3338, 'São José do Egito', 16),\n" +
    "(3339, 'São Lourenço da Mata', 16),\n" +
    "(3340, 'São Vicente Ferrer', 16),\n" +
    "(3341, 'Serra Talhada', 16),\n" +
    "(3342, 'Serrita', 16),\n" +
    "(3343, 'Sertânia', 16),\n" +
    "(3344, 'Sirinhaém', 16),\n" +
    "(3345, 'Solidão', 16),\n" +
    "(3346, 'Surubim', 16),\n" +
    "(3347, 'Tabira', 16),\n" +
    "(3348, 'Tacaimbó', 16),\n" +
    "(3349, 'Tacaratu', 16),\n" +
    "(3350, 'Tamandaré', 16),\n" +
    "(3351, 'Taquaritinga do Norte', 16),\n" +
    "(3352, 'Terezinha', 16),\n" +
    "(3353, 'Terra Nova', 16),\n" +
    "(3354, 'Timbaúba', 16),\n" +
    "(3355, 'Toritama', 16),\n" +
    "(3356, 'Tracunhaém', 16),\n" +
    "(3357, 'Trindade', 16),\n" +
    "(3358, 'Triunfo', 16),\n" +
    "(3359, 'Tupanatinga', 16),\n" +
    "(3360, 'Tuparetama', 16),\n" +
    "(3361, 'Venturosa', 16),\n" +
    "(3362, 'Verdejante', 16),\n" +
    "(3363, 'Vertente do Lério', 16),\n" +
    "(3364, 'Vertentes', 16),\n" +
    "(3365, 'Vicência', 16),\n" +
    "(3366, 'Vitória de Santo Antão', 16),\n" +
    "(3367, 'Xexéu', 16),\n" +
    "(3368, 'Acauã', 17),\n" +
    "(3369, 'Agricolândia', 17),\n" +
    "(3370, 'Água Branca', 17),\n" +
    "(3371, 'Alagoinha do Piauí', 17),\n" +
    "(3372, 'Alegrete do Piauí', 17),\n" +
    "(3373, 'Alto Longá', 17),\n" +
    "(3374, 'Altos', 17),\n" +
    "(3375, 'Alvorada do Gurguéia', 17),\n" +
    "(3376, 'Amarante', 17),\n" +
    "(3377, 'Angical do Piauí', 17),\n" +
    "(3378, 'Anísio de Abreu', 17),\n" +
    "(3379, 'Antônio Almeida', 17),\n" +
    "(3380, 'Aroazes', 17),\n" +
    "(3381, 'Aroeiras do Itaim', 17),\n" +
    "(3382, 'Arraial', 17),\n" +
    "(3383, 'Assunção do Piauí', 17),\n" +
    "(3384, 'Avelino Lopes', 17),\n" +
    "(3385, 'Baixa Grande do Ribeiro', 17),\n" +
    "(3386, 'Barra dAlcântara', 17),\n" +
    "(3387, 'Barras', 17),\n" +
    "(3388, 'Barreiras do Piauí', 17),\n" +
    "(3389, 'Barro Duro', 17),\n" +
    "(3390, 'Batalha', 17),\n" +
    "(3391, 'Bela Vista do Piauí', 17),\n" +
    "(3392, 'Belém do Piauí', 17),\n" +
    "(3393, 'Beneditinos', 17),\n" +
    "(3394, 'Bertolínia', 17),\n" +
    "(3395, 'Betânia do Piauí', 17),\n" +
    "(3396, 'Boa Hora', 17),\n" +
    "(3397, 'Bocaina', 17),\n" +
    "(3398, 'Bom Jesus', 17),\n" +
    "(3399, 'Bom Princípio do Piauí', 17),\n" +
    "(3400, 'Bonfim do Piauí', 17),\n" +
    "(3401, 'Boqueirão do Piauí', 17),\n" +
    "(3402, 'Brasileira', 17),\n" +
    "(3403, 'Brejo do Piauí', 17),\n" +
    "(3404, 'Buriti dos Lopes', 17),\n" +
    "(3405, 'Buriti dos Montes', 17),\n" +
    "(3406, 'Cabeceiras do Piauí', 17),\n" +
    "(3407, 'Cajazeiras do Piauí', 17),\n" +
    "(3408, 'Cajueiro da Praia', 17),\n" +
    "(3409, 'Caldeirão Grande do Piauí', 17),\n" +
    "(3410, 'Campinas do Piauí', 17),\n" +
    "(3411, 'Campo Alegre do Fidalgo', 17),\n" +
    "(3412, 'Campo Grande do Piauí', 17),\n" +
    "(3413, 'Campo Largo do Piauí', 17),\n" +
    "(3414, 'Campo Maior', 17),\n" +
    "(3415, 'Canavieira', 17),\n" +
    "(3416, 'Canto do Buriti', 17),\n" +
    "(3417, 'Capitão de Campos', 17),\n" +
    "(3418, 'Capitão Gervásio Oliveira', 17),\n" +
    "(3419, 'Caracol', 17),\n" +
    "(3420, 'Caraúbas do Piauí', 17),\n" +
    "(3421, 'Caridade do Piauí', 17),\n" +
    "(3422, 'Castelo do Piauí', 17),\n" +
    "(3423, 'Caxingó', 17),\n" +
    "(3424, 'Cocal', 17),\n" +
    "(3425, 'Cocal de Telha', 17),\n" +
    "(3426, 'Cocal dos Alves', 17),\n" +
    "(3427, 'Coivaras', 17),\n" +
    "(3428, 'Colônia do Gurguéia', 17),\n" +
    "(3429, 'Colônia do Piauí', 17),\n" +
    "(3430, 'Conceição do Canindé', 17),\n" +
    "(3431, 'Coronel José Dias', 17),\n" +
    "(3432, 'Corrente', 17),\n" +
    "(3433, 'Cristalândia do Piauí', 17),\n" +
    "(3434, 'Cristino Castro', 17),\n" +
    "(3435, 'Curimatá', 17),\n" +
    "(3436, 'Currais', 17),\n" +
    "(3437, 'Curral Novo do Piauí', 17),\n" +
    "(3438, 'Curralinhos', 17),\n" +
    "(3439, 'Demerval Lobão', 17),\n" +
    "(3440, 'Dirceu Arcoverde', 17),\n" +
    "(3441, 'Dom Expedito Lopes', 17),\n" +
    "(3442, 'Dom Inocêncio', 17),\n" +
    "(3443, 'Domingos Mourão', 17),\n" +
    "(3444, 'Elesbão Veloso', 17),\n" +
    "(3445, 'Eliseu Martins', 17),\n" +
    "(3446, 'Esperantina', 17),\n" +
    "(3447, 'Fartura do Piauí', 17),\n" +
    "(3448, 'Flores do Piauí', 17),\n" +
    "(3449, 'Floresta do Piauí', 17),\n" +
    "(3450, 'Floriano', 17),\n" +
    "(3451, 'Francinópolis', 17),\n" +
    "(3452, 'Francisco Ayres', 17),\n" +
    "(3453, 'Francisco Macedo', 17),\n" +
    "(3454, 'Francisco Santos', 17),\n" +
    "(3455, 'Fronteiras', 17),\n" +
    "(3456, 'Geminiano', 17),\n" +
    "(3457, 'Gilbués', 17),\n" +
    "(3458, 'Guadalupe', 17),\n" +
    "(3459, 'Guaribas', 17),\n" +
    "(3460, 'Hugo Napoleão', 17),\n" +
    "(3461, 'Ilha Grande', 17),\n" +
    "(3462, 'Inhuma', 17),\n" +
    "(3463, 'Ipiranga do Piauí', 17),\n" +
    "(3464, 'Isaías Coelho', 17),\n" +
    "(3465, 'Itainópolis', 17),\n" +
    "(3466, 'Itaueira', 17),\n" +
    "(3467, 'Jacobina do Piauí', 17),\n" +
    "(3468, 'Jaicós', 17),\n" +
    "(3469, 'Jardim do Mulato', 17),\n" +
    "(3470, 'Jatobá do Piauí', 17),\n" +
    "(3471, 'Jerumenha', 17),\n" +
    "(3472, 'João Costa', 17),\n" +
    "(3473, 'Joaquim Pires', 17),\n" +
    "(3474, 'Joca Marques', 17),\n" +
    "(3475, 'José de Freitas', 17),\n" +
    "(3476, 'Juazeiro do Piauí', 17),\n" +
    "(3477, 'Júlio Borges', 17),\n" +
    "(3478, 'Jurema', 17),\n" +
    "(3479, 'Lagoa Alegre', 17),\n" +
    "(3480, 'Lagoa de São Francisco', 17),\n" +
    "(3481, 'Lagoa do Barro do Piauí', 17),\n" +
    "(3482, 'Lagoa do Piauí', 17),\n" +
    "(3483, 'Lagoa do Sítio', 17),\n" +
    "(3484, 'Lagoinha do Piauí', 17),\n" +
    "(3485, 'Landri Sales', 17),\n" +
    "(3486, 'Luís Correia', 17),\n" +
    "(3487, 'Luzilândia', 17),\n" +
    "(3488, 'Madeiro', 17),\n" +
    "(3489, 'Manoel Emídio', 17),\n" +
    "(3490, 'Marcolândia', 17),\n" +
    "(3491, 'Marcos Parente', 17),\n" +
    "(3492, 'Massapê do Piauí', 17),\n" +
    "(3493, 'Matias Olímpio', 17),\n" +
    "(3494, 'Miguel Alves', 17),\n" +
    "(3495, 'Miguel Leão', 17),\n" +
    "(3496, 'Milton Brandão', 17),\n" +
    "(3497, 'Monsenhor Gil', 17),\n" +
    "(3498, 'Monsenhor Hipólito', 17),\n" +
    "(3499, 'Monte Alegre do Piauí', 17),\n" +
    "(3500, 'Morro Cabeça no Tempo', 17),\n" +
    "(3501, 'Morro do Chapéu do Piauí', 17),\n" +
    "(3502, 'Murici dos Portelas', 17),\n" +
    "(3503, 'Nazaré do Piauí', 17),\n" +
    "(3504, 'Nossa Senhora de Nazaré', 17),\n" +
    "(3505, 'Nossa Senhora dos Remédios', 17),\n" +
    "(3506, 'Nova Santa Rita', 17),\n" +
    "(3507, 'Novo Oriente do Piauí', 17),\n" +
    "(3508, 'Novo Santo Antônio', 17),\n" +
    "(3509, 'Oeiras', 17),\n" +
    "(3510, 'Olho dÁgua do Piauí', 17),\n" +
    "(3511, 'Padre Marcos', 17),\n" +
    "(3512, 'Paes Landim', 17),\n" +
    "(3513, 'Pajeú do Piauí', 17),\n" +
    "(3514, 'Palmeira do Piauí', 17),\n" +
    "(3515, 'Palmeirais', 17),\n" +
    "(3516, 'Paquetá', 17),\n" +
    "(3517, 'Parnaguá', 17),\n" +
    "(3518, 'Parnaíba', 17),\n" +
    "(3519, 'Passagem Franca do Piauí', 17),\n" +
    "(3520, 'Patos do Piauí', 17),\n" +
    "(3521, 'Pau dArco do Piauí', 17),\n" +
    "(3522, 'Paulistana', 17),\n" +
    "(3523, 'Pavussu', 17),\n" +
    "(3524, 'Pedro II', 17),\n" +
    "(3525, 'Pedro Laurentino', 17),\n" +
    "(3526, 'Picos', 17),\n" +
    "(3527, 'Pimenteiras', 17),\n" +
    "(3528, 'Pio IX', 17),\n" +
    "(3529, 'Piracuruca', 17),\n" +
    "(3530, 'Piripiri', 17),\n" +
    "(3531, 'Porto', 17),\n" +
    "(3532, 'Porto Alegre do Piauí', 17),\n" +
    "(3533, 'Prata do Piauí', 17),\n" +
    "(3534, 'Queimada Nova', 17);";

const sql8 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(3535, 'Redenção do Gurguéia', 17),\n" +
    "(3536, 'Regeneração', 17),\n" +
    "(3537, 'Riacho Frio', 17),\n" +
    "(3538, 'Ribeira do Piauí', 17),\n" +
    "(3539, 'Ribeiro Gonçalves', 17),\n" +
    "(3540, 'Rio Grande do Piauí', 17),\n" +
    "(3541, 'Santa Cruz do Piauí', 17),\n" +
    "(3542, 'Santa Cruz dos Milagres', 17),\n" +
    "(3543, 'Santa Filomena', 17),\n" +
    "(3544, 'Santa Luz', 17),\n" +
    "(3545, 'Santa Rosa do Piauí', 17),\n" +
    "(3546, 'Santana do Piauí', 17),\n" +
    "(3547, 'Santo Antônio de Lisboa', 17),\n" +
    "(3548, 'Santo Antônio dos Milagres', 17),\n" +
    "(3549, 'Santo Inácio do Piauí', 17),\n" +
    "(3550, 'São Braz do Piauí', 17),\n" +
    "(3551, 'São Félix do Piauí', 17),\n" +
    "(3552, 'São Francisco de Assis do Piauí', 17),\n" +
    "(3553, 'São Francisco do Piauí', 17),\n" +
    "(3554, 'São Gonçalo do Gurguéia', 17),\n" +
    "(3555, 'São Gonçalo do Piauí', 17),\n" +
    "(3556, 'São João da Canabrava', 17),\n" +
    "(3557, 'São João da Fronteira', 17),\n" +
    "(3558, 'São João da Serra', 17),\n" +
    "(3559, 'São João da Varjota', 17),\n" +
    "(3560, 'São João do Arraial', 17),\n" +
    "(3561, 'São João do Piauí', 17),\n" +
    "(3562, 'São José do Divino', 17),\n" +
    "(3563, 'São José do Peixe', 17),\n" +
    "(3564, 'São José do Piauí', 17),\n" +
    "(3565, 'São Julião', 17),\n" +
    "(3566, 'São Lourenço do Piauí', 17),\n" +
    "(3567, 'São Luis do Piauí', 17),\n" +
    "(3568, 'São Miguel da Baixa Grande', 17),\n" +
    "(3569, 'São Miguel do Fidalgo', 17),\n" +
    "(3570, 'São Miguel do Tapuio', 17),\n" +
    "(3571, 'São Pedro do Piauí', 17),\n" +
    "(3572, 'São Raimundo Nonato', 17),\n" +
    "(3573, 'Sebastião Barros', 17),\n" +
    "(3574, 'Sebastião Leal', 17),\n" +
    "(3575, 'Sigefredo Pacheco', 17),\n" +
    "(3576, 'Simões', 17),\n" +
    "(3577, 'Simplício Mendes', 17),\n" +
    "(3578, 'Socorro do Piauí', 17),\n" +
    "(3579, 'Sussuapara', 17),\n" +
    "(3580, 'Tamboril do Piauí', 17),\n" +
    "(3581, 'Tanque do Piauí', 17),\n" +
    "(3582, 'Teresina', 17),\n" +
    "(3583, 'União', 17),\n" +
    "(3584, 'Uruçuí', 17),\n" +
    "(3585, 'Valença do Piauí', 17),\n" +
    "(3586, 'Várzea Branca', 17),\n" +
    "(3587, 'Várzea Grande', 17),\n" +
    "(3588, 'Vera Mendes', 17),\n" +
    "(3589, 'Vila Nova do Piauí', 17),\n" +
    "(3590, 'Wall Ferraz', 17),\n" +
    "(3591, 'Angra dos Reis', 19),\n" +
    "(3592, 'Aperibé', 19),\n" +
    "(3593, 'Araruama', 19),\n" +
    "(3594, 'Areal', 19),\n" +
    "(3595, 'Armação dos Búzios', 19),\n" +
    "(3596, 'Arraial do Cabo', 19),\n" +
    "(3597, 'Barra do Piraí', 19),\n" +
    "(3598, 'Barra Mansa', 19),\n" +
    "(3599, 'Belford Roxo', 19),\n" +
    "(3600, 'Bom Jardim', 19),\n" +
    "(3601, 'Bom Jesus do Itabapoana', 19),\n" +
    "(3602, 'Cabo Frio', 19),\n" +
    "(3603, 'Cachoeiras de Macacu', 19),\n" +
    "(3604, 'Cambuci', 19),\n" +
    "(3605, 'Campos dos Goytacazes', 19),\n" +
    "(3606, 'Cantagalo', 19),\n" +
    "(3607, 'Carapebus', 19),\n" +
    "(3608, 'Cardoso Moreira', 19),\n" +
    "(3609, 'Carmo', 19),\n" +
    "(3610, 'Casimiro de Abreu', 19),\n" +
    "(3611, 'Comendador Levy Gasparian', 19),\n" +
    "(3612, 'Conceição de Macabu', 19),\n" +
    "(3613, 'Cordeiro', 19),\n" +
    "(3614, 'Duas Barras', 19),\n" +
    "(3615, 'Duque de Caxias', 19),\n" +
    "(3616, 'Engenheiro Paulo de Frontin', 19),\n" +
    "(3617, 'Guapimirim', 19),\n" +
    "(3618, 'Iguaba Grande', 19),\n" +
    "(3619, 'Itaboraí', 19),\n" +
    "(3620, 'Itaguaí', 19),\n" +
    "(3621, 'Italva', 19),\n" +
    "(3622, 'Itaocara', 19),\n" +
    "(3623, 'Itaperuna', 19),\n" +
    "(3624, 'Itatiaia', 19),\n" +
    "(3625, 'Japeri', 19),\n" +
    "(3626, 'Laje do Muriaé', 19),\n" +
    "(3627, 'Macaé', 19),\n" +
    "(3628, 'Macuco', 19),\n" +
    "(3629, 'Magé', 19),\n" +
    "(3630, 'Mangaratiba', 19),\n" +
    "(3631, 'Maricá', 19),\n" +
    "(3632, 'Mendes', 19),\n" +
    "(3633, 'Mesquita', 19),\n" +
    "(3634, 'Miguel Pereira', 19),\n" +
    "(3635, 'Miracema', 19),\n" +
    "(3636, 'Natividade', 19),\n" +
    "(3637, 'Nilópolis', 19),\n" +
    "(3638, 'Niterói', 19),\n" +
    "(3639, 'Nova Friburgo', 19),\n" +
    "(3640, 'Nova Iguaçu', 19),\n" +
    "(3641, 'Paracambi', 19),\n" +
    "(3642, 'Paraíba do Sul', 19),\n" +
    "(3643, 'Parati', 19),\n" +
    "(3644, 'Paty do Alferes', 19),\n" +
    "(3645, 'Petrópolis', 19),\n" +
    "(3646, 'Pinheiral', 19),\n" +
    "(3647, 'Piraí', 19),\n" +
    "(3648, 'Porciúncula', 19),\n" +
    "(3649, 'Porto Real', 19),\n" +
    "(3650, 'Quatis', 19),\n" +
    "(3651, 'Queimados', 19),\n" +
    "(3652, 'Quissamã', 19),\n" +
    "(3653, 'Resende', 19),\n" +
    "(3654, 'Rio Bonito', 19),\n" +
    "(3655, 'Rio Claro', 19),\n" +
    "(3656, 'Rio das Flores', 19),\n" +
    "(3657, 'Rio das Ostras', 19),\n" +
    "(3658, 'Rio de Janeiro', 19),\n" +
    "(3659, 'Santa Maria Madalena', 19),\n" +
    "(3660, 'Santo Antônio de Pádua', 19),\n" +
    "(3661, 'São Fidélis', 19),\n" +
    "(3662, 'São Francisco de Itabapoana', 19),\n" +
    "(3663, 'São Gonçalo', 19),\n" +
    "(3664, 'São João da Barra', 19),\n" +
    "(3665, 'São João de Meriti', 19),\n" +
    "(3666, 'São José de Ubá', 19),\n" +
    "(3667, 'São José do Vale do Rio Pret', 19),\n" +
    "(3668, 'São Pedro da Aldeia', 19),\n" +
    "(3669, 'São Sebastião do Alto', 19),\n" +
    "(3670, 'Sapucaia', 19),\n" +
    "(3671, 'Saquarema', 19),\n" +
    "(3672, 'Seropédica', 19),\n" +
    "(3673, 'Silva Jardim', 19),\n" +
    "(3674, 'Sumidouro', 19),\n" +
    "(3675, 'Tanguá', 19),\n" +
    "(3676, 'Teresópolis', 19),\n" +
    "(3677, 'Trajano de Morais', 19),\n" +
    "(3678, 'Três Rios', 19),\n" +
    "(3679, 'Valença', 19),\n" +
    "(3680, 'Varre-Sai', 19),\n" +
    "(3681, 'Vassouras', 19),\n" +
    "(3682, 'Volta Redonda', 19),\n" +
    "(3683, 'Acari', 20),\n" +
    "(3684, 'Açu', 20),\n" +
    "(3685, 'Afonso Bezerra', 20),\n" +
    "(3686, 'Água Nova', 20),\n" +
    "(3687, 'Alexandria', 20),\n" +
    "(3688, 'Almino Afonso', 20),\n" +
    "(3689, 'Alto do Rodrigues', 20),\n" +
    "(3690, 'Angicos', 20),\n" +
    "(3691, 'Antônio Martins', 20),\n" +
    "(3692, 'Apodi', 20),\n" +
    "(3693, 'Areia Branca', 20),\n" +
    "(3694, 'Arês', 20),\n" +
    "(3695, 'Augusto Severo', 20),\n" +
    "(3696, 'Baía Formosa', 20),\n" +
    "(3697, 'Baraúna', 20),\n" +
    "(3698, 'Barcelona', 20),\n" +
    "(3699, 'Bento Fernandes', 20),\n" +
    "(3700, 'Bodó', 20),\n" +
    "(3701, 'Bom Jesus', 20),\n" +
    "(3702, 'Brejinho', 20),\n" +
    "(3703, 'Caiçara do Norte', 20),\n" +
    "(3704, 'Caiçara do Rio do Vento', 20),\n" +
    "(3705, 'Caicó', 20),\n" +
    "(3706, 'Campo Redondo', 20),\n" +
    "(3707, 'Canguaretama', 20),\n" +
    "(3708, 'Caraúbas', 20),\n" +
    "(3709, 'Carnaúba dos Dantas', 20),\n" +
    "(3710, 'Carnaubais', 20),\n" +
    "(3711, 'Ceará-Mirim', 20),\n" +
    "(3712, 'Cerro Corá', 20),\n" +
    "(3713, 'Coronel Ezequiel', 20),\n" +
    "(3714, 'Coronel João Pessoa', 20),\n" +
    "(3715, 'Cruzeta', 20),\n" +
    "(3716, 'Currais Novos', 20),\n" +
    "(3717, 'Doutor Severiano', 20),\n" +
    "(3718, 'Encanto', 20),\n" +
    "(3719, 'Equador', 20),\n" +
    "(3720, 'Espírito Santo', 20),\n" +
    "(3721, 'Extremoz', 20),\n" +
    "(3722, 'Felipe Guerra', 20),\n" +
    "(3723, 'Fernando Pedroza', 20),\n" +
    "(3724, 'Florânia', 20),\n" +
    "(3725, 'Francisco Dantas', 20),\n" +
    "(3726, 'Frutuoso Gomes', 20),\n" +
    "(3727, 'Galinhos', 20),\n" +
    "(3728, 'Goianinha', 20),\n" +
    "(3729, 'Governador Dix-Sept Rosado', 20),\n" +
    "(3730, 'Grossos', 20),\n" +
    "(3731, 'Guamaré', 20),\n" +
    "(3732, 'Ielmo Marinho', 20),\n" +
    "(3733, 'Ipanguaçu', 20),\n" +
    "(3734, 'Ipueira', 20),\n" +
    "(3735, 'Itajá', 20),\n" +
    "(3736, 'Itaú', 20),\n" +
    "(3737, 'Jaçanã', 20),\n" +
    "(3738, 'Jandaíra', 20),\n" +
    "(3739, 'Janduís', 20),\n" +
    "(3740, 'Januário Cicco', 20),\n" +
    "(3741, 'Japi', 20),\n" +
    "(3742, 'Jardim de Angicos', 20),\n" +
    "(3743, 'Jardim de Piranhas', 20),\n" +
    "(3744, 'Jardim do Seridó', 20),\n" +
    "(3745, 'João Câmara', 20),\n" +
    "(3746, 'João Dias', 20),\n" +
    "(3747, 'José da Penha', 20),\n" +
    "(3748, 'Jucurutu', 20),\n" +
    "(3749, 'Jundiá', 20),\n" +
    "(3750, 'Lagoa dAnta', 20),\n" +
    "(3751, 'Lagoa de Pedras', 20),\n" +
    "(3752, 'Lagoa de Velhos', 20),\n" +
    "(3753, 'Lagoa Nova', 20),\n" +
    "(3754, 'Lagoa Salgada', 20),\n" +
    "(3755, 'Lajes', 20),\n" +
    "(3756, 'Lajes Pintadas', 20),\n" +
    "(3757, 'Lucrécia', 20),\n" +
    "(3758, 'Luís Gomes', 20),\n" +
    "(3759, 'Macaíba', 20),\n" +
    "(3760, 'Macau', 20),\n" +
    "(3761, 'Major Sales', 20),\n" +
    "(3762, 'Marcelino Vieira', 20),\n" +
    "(3763, 'Martins', 20),\n" +
    "(3764, 'Maxaranguape', 20),\n" +
    "(3765, 'Messias Targino', 20),\n" +
    "(3766, 'Montanhas', 20),\n" +
    "(3767, 'Monte Alegre', 20),\n" +
    "(3768, 'Monte das Gameleiras', 20),\n" +
    "(3769, 'Mossoró', 20),\n" +
    "(3770, 'Natal', 20),\n" +
    "(3771, 'Nísia Floresta', 20),\n" +
    "(3772, 'Nova Cruz', 20),\n" +
    "(3773, 'Olho-dÁgua do Borges', 20),\n" +
    "(3774, 'Ouro Branco', 20),\n" +
    "(3775, 'Paraná', 20),\n" +
    "(3776, 'Paraú', 20),\n" +
    "(3777, 'Parazinho', 20),\n" +
    "(3778, 'Parelhas', 20),\n" +
    "(3779, 'Parnamirim', 20),\n" +
    "(3780, 'Passa e Fica', 20),\n" +
    "(3781, 'Passagem', 20),\n" +
    "(3782, 'Patu', 20),\n" +
    "(3783, 'Pau dos Ferros', 20),\n" +
    "(3784, 'Pedra Grande', 20),\n" +
    "(3785, 'Pedra Preta', 20),\n" +
    "(3786, 'Pedro Avelino', 20),\n" +
    "(3787, 'Pedro Velho', 20),\n" +
    "(3788, 'Pendências', 20),\n" +
    "(3789, 'Pilões', 20),\n" +
    "(3790, 'Poço Branco', 20),\n" +
    "(3791, 'Portalegre', 20),\n" +
    "(3792, 'Porto do Mangue', 20),\n" +
    "(3793, 'Presidente Juscelino', 20),\n" +
    "(3794, 'Pureza', 20),\n" +
    "(3795, 'Rafael Fernandes', 20),\n" +
    "(3796, 'Rafael Godeiro', 20),\n" +
    "(3797, 'Riacho da Cruz', 20),\n" +
    "(3798, 'Riacho de Santana', 20),\n" +
    "(3799, 'Riachuelo', 20),\n" +
    "(3800, 'Rio do Fogo', 20),\n" +
    "(3801, 'Rodolfo Fernandes', 20),\n" +
    "(3802, 'Ruy Barbosa', 20),\n" +
    "(3803, 'Santa Cruz', 20),\n" +
    "(3804, 'Santa Maria', 20),\n" +
    "(3805, 'Santana do Matos', 20),\n" +
    "(3806, 'Santana do Seridó', 20),\n" +
    "(3807, 'Santo Antônio', 20),\n" +
    "(3808, 'São Bento do Norte', 20),\n" +
    "(3809, 'São Bento do Trairí', 20),\n" +
    "(3810, 'São Fernando', 20),\n" +
    "(3811, 'São Francisco do Oeste', 20),\n" +
    "(3812, 'São Gonçalo do Amarante', 20),\n" +
    "(3813, 'São João do Sabugi', 20),\n" +
    "(3814, 'São José de Mipibu', 20),\n" +
    "(3815, 'São José do Campestre', 20),\n" +
    "(3816, 'São José do Seridó', 20),\n" +
    "(3817, 'São Miguel', 20),\n" +
    "(3818, 'São Miguel do Gostoso', 20),\n" +
    "(3819, 'São Paulo do Potengi', 20),\n" +
    "(3820, 'São Pedro', 20),\n" +
    "(3821, 'São Rafael', 20),\n" +
    "(3822, 'São Tomé', 20),\n" +
    "(3823, 'São Vicente', 20),\n" +
    "(3824, 'Senador Elói de Souza', 20),\n" +
    "(3825, 'Senador Georgino Avelino', 20),\n" +
    "(3826, 'Serra de São Bento', 20),\n" +
    "(3827, 'Serra do Mel', 20),\n" +
    "(3828, 'Serra Negra do Norte', 20),\n" +
    "(3829, 'Serrinha', 20),\n" +
    "(3830, 'Serrinha dos Pintos', 20),\n" +
    "(3831, 'Severiano Melo', 20),\n" +
    "(3832, 'Sítio Novo', 20),\n" +
    "(3833, 'Taboleiro Grande', 20),\n" +
    "(3834, 'Taipu', 20),\n" +
    "(3835, 'Tangará', 20),\n" +
    "(3836, 'Tenente Ananias', 20),\n" +
    "(3837, 'Tenente Laurentino Cruz', 20),\n" +
    "(3838, 'Tibau', 20),\n" +
    "(3839, 'Tibau do Sul', 20),\n" +
    "(3840, 'Timbaúba dos Batistas', 20),\n" +
    "(3841, 'Touros', 20),\n" +
    "(3842, 'Triunfo Potiguar', 20),\n" +
    "(3843, 'Umarizal', 20),\n" +
    "(3844, 'Upanema', 20),\n" +
    "(3845, 'Várzea', 20),\n" +
    "(3846, 'Venha-Ver', 20),\n" +
    "(3847, 'Vera Cruz', 20),\n" +
    "(3848, 'Viçosa', 20),\n" +
    "(3849, 'Vila Flor', 20),\n" +
    "(3850, 'Aceguá', 23),\n" +
    "(3851, 'Água Santa', 23),\n" +
    "(3852, 'Agudo', 23),\n" +
    "(3853, 'Ajuricaba', 23),\n" +
    "(3854, 'Alecrim', 23),\n" +
    "(3855, 'Alegrete', 23),\n" +
    "(3856, 'Alegria', 23),\n" +
    "(3857, 'Almirante Tamandaré do Sul', 23),\n" +
    "(3858, 'Alpestre', 23),\n" +
    "(3859, 'Alto Alegre', 23),\n" +
    "(3860, 'Alto Feliz', 23),\n" +
    "(3861, 'Alvorada', 23),\n" +
    "(3862, 'Amaral Ferrador', 23),\n" +
    "(3863, 'Ametista do Sul', 23),\n" +
    "(3864, 'André da Rocha', 23),\n" +
    "(3865, 'Anta Gorda', 23),\n" +
    "(3866, 'Antônio Prado', 23),\n" +
    "(3867, 'Arambaré', 23),\n" +
    "(3868, 'Araricá', 23),\n" +
    "(3869, 'Aratiba', 23),\n" +
    "(3870, 'Arroio do Meio', 23),\n" +
    "(3871, 'Arroio do Padre', 23),\n" +
    "(3872, 'Arroio do Sal', 23),\n" +
    "(3873, 'Arroio do Tigre', 23),\n" +
    "(3874, 'Arroio dos Ratos', 23),\n" +
    "(3875, 'Arroio Grande', 23),\n" +
    "(3876, 'Arvorezinha', 23),\n" +
    "(3877, 'Augusto Pestana', 23),\n" +
    "(3878, 'Áurea', 23),\n" +
    "(3879, 'Bagé', 23),\n" +
    "(3880, 'Balneário Pinhal', 23),\n" +
    "(3881, 'Barão', 23),\n" +
    "(3882, 'Barão de Cotegipe', 23),\n" +
    "(3883, 'Barão do Triunfo', 23),\n" +
    "(3884, 'Barra do Guarita', 23),\n" +
    "(3885, 'Barra do Quaraí', 23),\n" +
    "(3886, 'Barra do Ribeiro', 23),\n" +
    "(3887, 'Barra do Rio Azul', 23),\n" +
    "(3888, 'Barra Funda', 23),\n" +
    "(3889, 'Barracão', 23),\n" +
    "(3890, 'Barros Cassal', 23),\n" +
    "(3891, 'Benjamin Constant do Sul', 23),\n" +
    "(3892, 'Bento Gonçalves', 23),\n" +
    "(3893, 'Boa Vista das Missões', 23),\n" +
    "(3894, 'Boa Vista do Buricá', 23),\n" +
    "(3895, 'Boa Vista do Cadeado', 23),\n" +
    "(3896, 'Boa Vista do Incra', 23),\n" +
    "(3897, 'Boa Vista do Sul', 23),\n" +
    "(3898, 'Bom Jesus', 23),\n" +
    "(3899, 'Bom Princípio', 23),\n" +
    "(3900, 'Bom Progresso', 23),\n" +
    "(3901, 'Bom Retiro do Sul', 23),\n" +
    "(3902, 'Boqueirão do Leão', 23),\n" +
    "(3903, 'Bossoroca', 23),\n" +
    "(3904, 'Bozano', 23),\n" +
    "(3905, 'Braga', 23),\n" +
    "(3906, 'Brochier', 23),\n" +
    "(3907, 'Butiá', 23),\n" +
    "(3908, 'Caçapava do Sul', 23),\n" +
    "(3909, 'Cacequi', 23),\n" +
    "(3910, 'Cachoeira do Sul', 23),\n" +
    "(3911, 'Cachoeirinha', 23),\n" +
    "(3912, 'Cacique Doble', 23),\n" +
    "(3913, 'Caibaté', 23),\n" +
    "(3914, 'Caiçara', 23),\n" +
    "(3915, 'Camaquã', 23),\n" +
    "(3916, 'Camargo', 23),\n" +
    "(3917, 'Cambará do Sul', 23),\n" +
    "(3918, 'Campestre da Serra', 23),\n" +
    "(3919, 'Campina das Missões', 23),\n" +
    "(3920, 'Campinas do Sul', 23),\n" +
    "(3921, 'Campo Bom', 23),\n" +
    "(3922, 'Campo Novo', 23),\n" +
    "(3923, 'Campos Borges', 23),\n" +
    "(3924, 'Candelária', 23),\n" +
    "(3925, 'Cândido Godói', 23),\n" +
    "(3926, 'Candiota', 23),\n" +
    "(3927, 'Canela', 23),\n" +
    "(3928, 'Canguçu', 23),\n" +
    "(3929, 'Canoas', 23),\n" +
    "(3930, 'Canudos do Vale', 23),\n" +
    "(3931, 'Capão Bonito do Sul', 23),\n" +
    "(3932, 'Capão da Canoa', 23),\n" +
    "(3933, 'Capão do Cipó', 23),\n" +
    "(3934, 'Capão do Leão', 23),\n" +
    "(3935, 'Capela de Santana', 23),\n" +
    "(3936, 'Capitão', 23),\n" +
    "(3937, 'Capivari do Sul', 23),\n" +
    "(3938, 'Caraá', 23),\n" +
    "(3939, 'Carazinho', 23),\n" +
    "(3940, 'Carlos Barbosa', 23),\n" +
    "(3941, 'Carlos Gomes', 23),\n" +
    "(3942, 'Casca', 23),\n" +
    "(3943, 'Caseiros', 23),\n" +
    "(3944, 'Catuípe', 23),\n" +
    "(3945, 'Caxias do Sul', 23),\n" +
    "(3946, 'Centenário', 23),\n" +
    "(3947, 'Cerrito', 23),\n" +
    "(3948, 'Cerro Branco', 23),\n" +
    "(3949, 'Cerro Grande', 23),\n" +
    "(3950, 'Cerro Grande do Sul', 23),\n" +
    "(3951, 'Cerro Largo', 23),\n" +
    "(3952, 'Chapada', 23),\n" +
    "(3953, 'Charqueadas', 23),\n" +
    "(3954, 'Charrua', 23),\n" +
    "(3955, 'Chiapeta', 23),\n" +
    "(3956, 'Chuí', 23),\n" +
    "(3957, 'Chuvisca', 23),\n" +
    "(3958, 'Cidreira', 23),\n" +
    "(3959, 'Ciríaco', 23),\n" +
    "(3960, 'Colinas', 23),\n" +
    "(3961, 'Colorado', 23),\n" +
    "(3962, 'Condor', 23),\n" +
    "(3963, 'Constantina', 23),\n" +
    "(3964, 'Coqueiro Baixo', 23),\n" +
    "(3965, 'Coqueiros do Sul', 23),\n" +
    "(3966, 'Coronel Barros', 23),\n" +
    "(3967, 'Coronel Bicaco', 23),\n" +
    "(3968, 'Coronel Pilar', 23),\n" +
    "(3969, 'Cotiporã', 23),\n" +
    "(3970, 'Coxilha', 23),\n" +
    "(3971, 'Crissiumal', 23),\n" +
    "(3972, 'Cristal', 23),\n" +
    "(3973, 'Cristal do Sul', 23),\n" +
    "(3974, 'Cruz Alta', 23),\n" +
    "(3975, 'Cruzaltense', 23),\n" +
    "(3976, 'Cruzeiro do Sul', 23),\n" +
    "(3977, 'David Canabarro', 23),\n" +
    "(3978, 'Derrubadas', 23),\n" +
    "(3979, 'Dezesseis de Novembro', 23),\n" +
    "(3980, 'Dilermando de Aguiar', 23),\n" +
    "(3981, 'Dois Irmãos', 23),\n" +
    "(3982, 'Dois Irmãos das Missões', 23),\n" +
    "(3983, 'Dois Lajeados', 23),\n" +
    "(3984, 'Dom Feliciano', 23),\n" +
    "(3985, 'Dom Pedrito', 23),\n" +
    "(3986, 'Dom Pedro de Alcântara', 23),\n" +
    "(3987, 'Dona Francisca', 23),\n" +
    "(3988, 'Doutor Maurício Cardoso', 23),\n" +
    "(3989, 'Doutor Ricardo', 23),\n" +
    "(3990, 'Eldorado do Sul', 23),\n" +
    "(3991, 'Encantado', 23),\n" +
    "(3992, 'Encruzilhada do Sul', 23),\n" +
    "(3993, 'Engenho Velho', 23),\n" +
    "(3994, 'Entre Rios do Sul', 23),\n" +
    "(3995, 'Entre-Ijuís', 23),\n" +
    "(3996, 'Erebango', 23),\n" +
    "(3997, 'Erechim', 23),\n" +
    "(3998, 'Ernestina', 23),\n" +
    "(3999, 'Erval Grande', 23),\n" +
    "(4000, 'Erval Seco', 23),\n" +
    "(4001, 'Esmeralda', 23),\n" +
    "(4002, 'Esperança do Sul', 23),\n" +
    "(4003, 'Espumoso', 23),\n" +
    "(4004, 'Estação', 23),\n" +
    "(4005, 'Estância Velha', 23),\n" +
    "(4006, 'Esteio', 23),\n" +
    "(4007, 'Estrela', 23),\n" +
    "(4008, 'Estrela Velha', 23),\n" +
    "(4009, 'Eugênio de Castro', 23),\n" +
    "(4010, 'Fagundes Varela', 23),\n" +
    "(4011, 'Farroupilha', 23),\n" +
    "(4012, 'Faxinal do Soturno', 23),\n" +
    "(4013, 'Faxinalzinho', 23),\n" +
    "(4014, 'Fazenda Vilanova', 23),\n" +
    "(4015, 'Feliz', 23),\n" +
    "(4016, 'Flores da Cunha', 23),\n" +
    "(4017, 'Floriano Peixoto', 23),\n" +
    "(4018, 'Fontoura Xavier', 23),\n" +
    "(4019, 'Formigueiro', 23),\n" +
    "(4020, 'Forquetinha', 23),\n" +
    "(4021, 'Fortaleza dos Valos', 23),\n" +
    "(4022, 'Frederico Westphalen', 23),\n" +
    "(4023, 'Garibaldi', 23),\n" +
    "(4024, 'Garruchos', 23),\n" +
    "(4025, 'Gaurama', 23),\n" +
    "(4026, 'General Câmara', 23),\n" +
    "(4027, 'Gentil', 23),\n" +
    "(4028, 'Getúlio Vargas', 23),\n" +
    "(4029, 'Giruá', 23),\n" +
    "(4030, 'Glorinha', 23),\n" +
    "(4031, 'Gramado', 23);";

const sql9 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(4032, 'Gramado dos Loureiros', 23),\n" +
    "(4033, 'Gramado Xavier', 23),\n" +
    "(4034, 'Gravataí', 23),\n" +
    "(4035, 'Guabiju', 23),\n" +
    "(4036, 'Guaíba', 23),\n" +
    "(4037, 'Guaporé', 23),\n" +
    "(4038, 'Guarani das Missões', 23),\n" +
    "(4039, 'Harmonia', 23),\n" +
    "(4040, 'Herval', 23),\n" +
    "(4041, 'Herveiras', 23),\n" +
    "(4042, 'Horizontina', 23),\n" +
    "(4043, 'Hulha Negra', 23),\n" +
    "(4044, 'Humaitá', 23),\n" +
    "(4045, 'Ibarama', 23),\n" +
    "(4046, 'Ibiaçá', 23),\n" +
    "(4047, 'Ibiraiaras', 23),\n" +
    "(4048, 'Ibirapuitã', 23),\n" +
    "(4049, 'Ibirubá', 23),\n" +
    "(4050, 'Igrejinha', 23),\n" +
    "(4051, 'Ijuí', 23),\n" +
    "(4052, 'Ilópolis', 23),\n" +
    "(4053, 'Imbé', 23),\n" +
    "(4054, 'Imigrante', 23),\n" +
    "(4055, 'Independência', 23),\n" +
    "(4056, 'Inhacorá', 23),\n" +
    "(4057, 'Ipê', 23),\n" +
    "(4058, 'Ipiranga do Sul', 23),\n" +
    "(4059, 'Iraí', 23),\n" +
    "(4060, 'Itaara', 23),\n" +
    "(4061, 'Itacurubi', 23),\n" +
    "(4062, 'Itapuca', 23),\n" +
    "(4063, 'Itaqui', 23),\n" +
    "(4064, 'Itati', 23),\n" +
    "(4065, 'Itatiba do Sul', 23),\n" +
    "(4066, 'Ivorá', 23),\n" +
    "(4067, 'Ivoti', 23),\n" +
    "(4068, 'Jaboticaba', 23),\n" +
    "(4069, 'Jacuizinho', 23),\n" +
    "(4070, 'Jacutinga', 23),\n" +
    "(4071, 'Jaguarão', 23),\n" +
    "(4072, 'Jaguari', 23),\n" +
    "(4073, 'Jaquirana', 23),\n" +
    "(4074, 'Jari', 23),\n" +
    "(4075, 'Jóia', 23),\n" +
    "(4076, 'Júlio de Castilhos', 23),\n" +
    "(4077, 'Lagoa Bonita do Sul', 23),\n" +
    "(4078, 'Lagoa dos Três Cantos', 23),\n" +
    "(4079, 'Lagoa Vermelha', 23),\n" +
    "(4080, 'Lagoão', 23),\n" +
    "(4081, 'Lajeado', 23),\n" +
    "(4082, 'Lajeado do Bugre', 23),\n" +
    "(4083, 'Lavras do Sul', 23),\n" +
    "(4084, 'Liberato Salzano', 23),\n" +
    "(4085, 'Lindolfo Collor', 23),\n" +
    "(4086, 'Linha Nova', 23),\n" +
    "(4087, 'Maçambara', 23),\n" +
    "(4088, 'Machadinho', 23),\n" +
    "(4089, 'Mampituba', 23),\n" +
    "(4090, 'Manoel Viana', 23),\n" +
    "(4091, 'Maquiné', 23),\n" +
    "(4092, 'Maratá', 23),\n" +
    "(4093, 'Marau', 23),\n" +
    "(4094, 'Marcelino Ramos', 23),\n" +
    "(4095, 'Mariana Pimentel', 23),\n" +
    "(4096, 'Mariano Moro', 23),\n" +
    "(4097, 'Marques de Souza', 23),\n" +
    "(4098, 'Mata', 23),\n" +
    "(4099, 'Mato Castelhano', 23),\n" +
    "(4100, 'Mato Leitão', 23),\n" +
    "(4101, 'Mato Queimado', 23),\n" +
    "(4102, 'Maximiliano de Almeida', 23),\n" +
    "(4103, 'Minas do Leão', 23),\n" +
    "(4104, 'Miraguaí', 23),\n" +
    "(4105, 'Montauri', 23),\n" +
    "(4106, 'Monte Alegre dos Campos', 23),\n" +
    "(4107, 'Monte Belo do Sul', 23),\n" +
    "(4108, 'Montenegro', 23),\n" +
    "(4109, 'Mormaço', 23),\n" +
    "(4110, 'Morrinhos do Sul', 23),\n" +
    "(4111, 'Morro Redondo', 23),\n" +
    "(4112, 'Morro Reuter', 23),\n" +
    "(4113, 'Mostardas', 23),\n" +
    "(4114, 'Muçum', 23),\n" +
    "(4115, 'Muitos Capões', 23),\n" +
    "(4116, 'Muliterno', 23),\n" +
    "(4117, 'Não-Me-Toque', 23),\n" +
    "(4118, 'Nicolau Vergueiro', 23),\n" +
    "(4119, 'Nonoai', 23),\n" +
    "(4120, 'Nova Alvorada', 23),\n" +
    "(4121, 'Nova Araçá', 23),\n" +
    "(4122, 'Nova Bassano', 23),\n" +
    "(4123, 'Nova Boa Vista', 23),\n" +
    "(4124, 'Nova Bréscia', 23),\n" +
    "(4125, 'Nova Candelária', 23),\n" +
    "(4126, 'Nova Esperança do Sul', 23),\n" +
    "(4127, 'Nova Hartz', 23),\n" +
    "(4128, 'Nova Pádua', 23),\n" +
    "(4129, 'Nova Palma', 23),\n" +
    "(4130, 'Nova Petrópolis', 23),\n" +
    "(4131, 'Nova Prata', 23),\n" +
    "(4132, 'Nova Ramada', 23),\n" +
    "(4133, 'Nova Roma do Sul', 23),\n" +
    "(4134, 'Nova Santa Rita', 23),\n" +
    "(4135, 'Novo Barreiro', 23),\n" +
    "(4136, 'Novo Cabrais', 23),\n" +
    "(4137, 'Novo Hamburgo', 23),\n" +
    "(4138, 'Novo Machado', 23),\n" +
    "(4139, 'Novo Tiradentes', 23),\n" +
    "(4140, 'Novo Xingu', 23),\n" +
    "(4141, 'Osório', 23),\n" +
    "(4142, 'Paim Filho', 23),\n" +
    "(4143, 'Palmares do Sul', 23),\n" +
    "(4144, 'Palmeira das Missões', 23),\n" +
    "(4145, 'Palmitinho', 23),\n" +
    "(4146, 'Panambi', 23),\n" +
    "(4147, 'Pantano Grande', 23),\n" +
    "(4148, 'Paraí', 23),\n" +
    "(4149, 'Paraíso do Sul', 23),\n" +
    "(4150, 'Pareci Novo', 23),\n" +
    "(4151, 'Parobé', 23),\n" +
    "(4152, 'Passa Sete', 23),\n" +
    "(4153, 'Passo do Sobrado', 23),\n" +
    "(4154, 'Passo Fundo', 23),\n" +
    "(4155, 'Paulo Bento', 23),\n" +
    "(4156, 'Paverama', 23),\n" +
    "(4157, 'Pedras Altas', 23),\n" +
    "(4158, 'Pedro Osório', 23),\n" +
    "(4159, 'Pejuçara', 23),\n" +
    "(4160, 'Pelotas', 23),\n" +
    "(4161, 'Picada Café', 23),\n" +
    "(4162, 'Pinhal', 23),\n" +
    "(4163, 'Pinhal da Serra', 23),\n" +
    "(4164, 'Pinhal Grande', 23),\n" +
    "(4165, 'Pinheirinho do Vale', 23),\n" +
    "(4166, 'Pinheiro Machado', 23),\n" +
    "(4167, 'Pirapó', 23),\n" +
    "(4168, 'Piratini', 23),\n" +
    "(4169, 'Planalto', 23),\n" +
    "(4170, 'Poço das Antas', 23),\n" +
    "(4171, 'Pontão', 23),\n" +
    "(4172, 'Ponte Preta', 23),\n" +
    "(4173, 'Portão', 23),\n" +
    "(4174, 'Porto Alegre', 23),\n" +
    "(4175, 'Porto Lucena', 23),\n" +
    "(4176, 'Porto Mauá', 23),\n" +
    "(4177, 'Porto Vera Cruz', 23),\n" +
    "(4178, 'Porto Xavier', 23),\n" +
    "(4179, 'Pouso Novo', 23),\n" +
    "(4180, 'Presidente Lucena', 23),\n" +
    "(4181, 'Progresso', 23),\n" +
    "(4182, 'Protásio Alves', 23),\n" +
    "(4183, 'Putinga', 23),\n" +
    "(4184, 'Quaraí', 23),\n" +
    "(4185, 'Quatro Irmãos', 23),\n" +
    "(4186, 'Quevedos', 23),\n" +
    "(4187, 'Quinze de Novembro', 23),\n" +
    "(4188, 'Redentora', 23),\n" +
    "(4189, 'Relvado', 23),\n" +
    "(4190, 'Restinga Seca', 23),\n" +
    "(4191, 'Rio dos Índios', 23),\n" +
    "(4192, 'Rio Grande', 23),\n" +
    "(4193, 'Rio Pardo', 23),\n" +
    "(4194, 'Riozinho', 23),\n" +
    "(4195, 'Roca Sales', 23),\n" +
    "(4196, 'Rodeio Bonito', 23),\n" +
    "(4197, 'Rolador', 23),\n" +
    "(4198, 'Rolante', 23),\n" +
    "(4199, 'Ronda Alta', 23),\n" +
    "(4200, 'Rondinha', 23),\n" +
    "(4201, 'Roque Gonzales', 23),\n" +
    "(4202, 'Rosário do Sul', 23),\n" +
    "(4203, 'Sagrada Família', 23),\n" +
    "(4204, 'Saldanha Marinho', 23),\n" +
    "(4205, 'Salto do Jacuí', 23),\n" +
    "(4206, 'Salvador das Missões', 23),\n" +
    "(4207, 'Salvador do Sul', 23),\n" +
    "(4208, 'Sananduva', 23),\n" +
    "(4209, 'Santa Bárbara do Sul', 23),\n" +
    "(4210, 'Santa Cecília do Sul', 23),\n" +
    "(4211, 'Santa Clara do Sul', 23),\n" +
    "(4212, 'Santa Cruz do Sul', 23),\n" +
    "(4213, 'Santa Margarida do Sul', 23),\n" +
    "(4214, 'Santa Maria', 23),\n" +
    "(4215, 'Santa Maria do Herval', 23),\n" +
    "(4216, 'Santa Rosa', 23),\n" +
    "(4217, 'Santa Tereza', 23),\n" +
    "(4218, 'Santa Vitória do Palmar', 23),\n" +
    "(4219, 'Santana da Boa Vista', 23),\n" +
    "(4220, 'Santana do Livramento', 23),\n" +
    "(4221, 'Santiago', 23),\n" +
    "(4222, 'Santo Ângelo', 23),\n" +
    "(4223, 'Santo Antônio da Patrulha', 23),\n" +
    "(4224, 'Santo Antônio das Missões', 23),\n" +
    "(4225, 'Santo Antônio do Palma', 23),\n" +
    "(4226, 'Santo Antônio do Planalto', 23),\n" +
    "(4227, 'Santo Augusto', 23),\n" +
    "(4228, 'Santo Cristo', 23),\n" +
    "(4229, 'Santo Expedito do Sul', 23),\n" +
    "(4230, 'São Borja', 23),\n" +
    "(4231, 'São Domingos do Sul', 23),\n" +
    "(4232, 'São Francisco de Assis', 23),\n" +
    "(4233, 'São Francisco de Paula', 23),\n" +
    "(4234, 'São Gabriel', 23),\n" +
    "(4235, 'São Jerônimo', 23),\n" +
    "(4236, 'São João da Urtiga', 23),\n" +
    "(4237, 'São João do Polêsine', 23),\n" +
    "(4238, 'São Jorge', 23),\n" +
    "(4239, 'São José das Missões', 23),\n" +
    "(4240, 'São José do Herval', 23),\n" +
    "(4241, 'São José do Hortêncio', 23),\n" +
    "(4242, 'São José do Inhacorá', 23),\n" +
    "(4243, 'São José do Norte', 23),\n" +
    "(4244, 'São José do Ouro', 23),\n" +
    "(4245, 'São José do Sul', 23),\n" +
    "(4246, 'São José dos Ausentes', 23),\n" +
    "(4247, 'São Leopoldo', 23),\n" +
    "(4248, 'São Lourenço do Sul', 23),\n" +
    "(4249, 'São Luiz Gonzaga', 23),\n" +
    "(4250, 'São Marcos', 23),\n" +
    "(4251, 'São Martinho', 23),\n" +
    "(4252, 'São Martinho da Serra', 23),\n" +
    "(4253, 'São Miguel das Missões', 23),\n" +
    "(4254, 'São Nicolau', 23),\n" +
    "(4255, 'São Paulo das Missões', 23),\n" +
    "(4256, 'São Pedro da Serra', 23),\n" +
    "(4257, 'São Pedro das Missões', 23),\n" +
    "(4258, 'São Pedro do Butiá', 23),\n" +
    "(4259, 'São Pedro do Sul', 23),\n" +
    "(4260, 'São Sebastião do Caí', 23),\n" +
    "(4261, 'São Sepé', 23),\n" +
    "(4262, 'São Valentim', 23),\n" +
    "(4263, 'São Valentim do Sul', 23),\n" +
    "(4264, 'São Valério do Sul', 23),\n" +
    "(4265, 'São Vendelino', 23),\n" +
    "(4266, 'São Vicente do Sul', 23),\n" +
    "(4267, 'Sapiranga', 23),\n" +
    "(4268, 'Sapucaia do Sul', 23),\n" +
    "(4269, 'Sarandi', 23),\n" +
    "(4270, 'Seberi', 23),\n" +
    "(4271, 'Sede Nova', 23),\n" +
    "(4272, 'Segredo', 23),\n" +
    "(4273, 'Selbach', 23),\n" +
    "(4274, 'Senador Salgado Filho', 23),\n" +
    "(4275, 'Sentinela do Sul', 23),\n" +
    "(4276, 'Serafina Corrêa', 23),\n" +
    "(4277, 'Sério', 23),\n" +
    "(4278, 'Sertão', 23),\n" +
    "(4279, 'Sertão Santana', 23),\n" +
    "(4280, 'Sete de Setembro', 23),\n" +
    "(4281, 'Severiano de Almeida', 23),\n" +
    "(4282, 'Silveira Martins', 23),\n" +
    "(4283, 'Sinimbu', 23),\n" +
    "(4284, 'Sobradinho', 23),\n" +
    "(4285, 'Soledade', 23),\n" +
    "(4286, 'Tabaí', 23),\n" +
    "(4287, 'Tapejara', 23),\n" +
    "(4288, 'Tapera', 23),\n" +
    "(4289, 'Tapes', 23),\n" +
    "(4290, 'Taquara', 23),\n" +
    "(4291, 'Taquari', 23),\n" +
    "(4292, 'Taquaruçu do Sul', 23),\n" +
    "(4293, 'Tavares', 23),\n" +
    "(4294, 'Tenente Portela', 23),\n" +
    "(4295, 'Terra de Areia', 23),\n" +
    "(4296, 'Teutônia', 23),\n" +
    "(4297, 'Tio Hugo', 23),\n" +
    "(4298, 'Tiradentes do Sul', 23),\n" +
    "(4299, 'Toropi', 23),\n" +
    "(4300, 'Torres', 23),\n" +
    "(4301, 'Tramandaí', 23),\n" +
    "(4302, 'Travesseiro', 23),\n" +
    "(4303, 'Três Arroios', 23),\n" +
    "(4304, 'Três Cachoeiras', 23),\n" +
    "(4305, 'Três Coroas', 23),\n" +
    "(4306, 'Três de Maio', 23),\n" +
    "(4307, 'Três Forquilhas', 23),\n" +
    "(4308, 'Três Palmeiras', 23),\n" +
    "(4309, 'Três Passos', 23),\n" +
    "(4310, 'Trindade do Sul', 23),\n" +
    "(4311, 'Triunfo', 23),\n" +
    "(4312, 'Tucunduva', 23),\n" +
    "(4313, 'Tunas', 23),\n" +
    "(4314, 'Tupanci do Sul', 23),\n" +
    "(4315, 'Tupanciretã', 23),\n" +
    "(4316, 'Tupandi', 23),\n" +
    "(4317, 'Tuparendi', 23),\n" +
    "(4318, 'Turuçu', 23),\n" +
    "(4319, 'Ubiretama', 23),\n" +
    "(4320, 'União da Serra', 23),\n" +
    "(4321, 'Unistalda', 23),\n" +
    "(4322, 'Uruguaiana', 23),\n" +
    "(4323, 'Vacaria', 23),\n" +
    "(4324, 'Vale do Sol', 23),\n" +
    "(4325, 'Vale Real', 23),\n" +
    "(4326, 'Vale Verde', 23),\n" +
    "(4327, 'Vanini', 23),\n" +
    "(4328, 'Venâncio Aires', 23),\n" +
    "(4329, 'Vera Cruz', 23),\n" +
    "(4330, 'Veranópolis', 23),\n" +
    "(4331, 'Vespasiano Correa', 23),\n" +
    "(4332, 'Viadutos', 23),\n" +
    "(4333, 'Viamão', 23),\n" +
    "(4334, 'Vicente Dutra', 23),\n" +
    "(4335, 'Victor Graeff', 23),\n" +
    "(4336, 'Vila Flores', 23),\n" +
    "(4337, 'Vila Lângaro', 23),\n" +
    "(4338, 'Vila Maria', 23),\n" +
    "(4339, 'Vila Nova do Sul', 23),\n" +
    "(4340, 'Vista Alegre', 23),\n" +
    "(4341, 'Vista Alegre do Prata', 23),\n" +
    "(4342, 'Vista Gaúcha', 23),\n" +
    "(4343, 'Vitória das Missões', 23),\n" +
    "(4344, 'Westfália', 23),\n" +
    "(4345, 'Xangri-lá', 23),\n" +
    "(4346, 'Alta Floresta dOeste', 21),\n" +
    "(4347, 'Alto Alegre dos Parecis', 21),\n" +
    "(4348, 'Alto Paraíso', 21),\n" +
    "(4349, 'Alvorada dOeste', 21),\n" +
    "(4350, 'Ariquemes', 21),\n" +
    "(4351, 'Buritis', 21),\n" +
    "(4352, 'Cabixi', 21),\n" +
    "(4353, 'Cacaulândia', 21),\n" +
    "(4354, 'Cacoal', 21),\n" +
    "(4355, 'Campo Novo de Rondônia', 21),\n" +
    "(4356, 'Candeias do Jamari', 21),\n" +
    "(4357, 'Castanheiras', 21),\n" +
    "(4358, 'Cerejeiras', 21),\n" +
    "(4359, 'Chupinguaia', 21),\n" +
    "(4360, 'Colorado do Oeste', 21),\n" +
    "(4361, 'Corumbiara', 21),\n" +
    "(4362, 'Costa Marques', 21),\n" +
    "(4363, 'Cujubim', 21),\n" +
    "(4364, 'Espigão dOeste', 21),\n" +
    "(4365, 'Governador Jorge Teixeira', 21),\n" +
    "(4366, 'Guajará-Mirim', 21),\n" +
    "(4367, 'Itapuã do Oeste', 21),\n" +
    "(4368, 'Jaru', 21),\n" +
    "(4369, 'Ji-Paraná', 21),\n" +
    "(4370, 'Machadinho dOeste', 21),\n" +
    "(4371, 'Ministro Andreazza', 21),\n" +
    "(4372, 'Mirante da Serra', 21),\n" +
    "(4373, 'Monte Negro', 21),\n" +
    "(4374, 'Nova Brasilândia dOeste', 21),\n" +
    "(4375, 'Nova Mamoré', 21),\n" +
    "(4376, 'Nova União', 21),\n" +
    "(4377, 'Novo Horizonte do Oeste', 21),\n" +
    "(4378, 'Ouro Preto do Oeste', 21),\n" +
    "(4379, 'Parecis', 21),\n" +
    "(4380, 'Pimenta Bueno', 21),\n" +
    "(4381, 'Pimenteiras do Oeste', 21),\n" +
    "(4382, 'Porto Velho', 21),\n" +
    "(4383, 'Presidente Médici', 21),\n" +
    "(4384, 'Primavera de Rondônia', 21),\n" +
    "(4385, 'Rio Crespo', 21),\n" +
    "(4386, 'Rolim de Moura', 21),\n" +
    "(4387, 'Santa Luzia dOeste', 21),\n" +
    "(4388, 'São Felipe dOeste', 21),\n" +
    "(4389, 'São Francisco do Guaporé', 21),\n" +
    "(4390, 'São Miguel do Guaporé', 21),\n" +
    "(4391, 'Seringueiras', 21),\n" +
    "(4392, 'Teixeirópolis', 21),\n" +
    "(4393, 'Theobroma', 21),\n" +
    "(4394, 'Urupá', 21),\n" +
    "(4395, 'Vale do Anari', 21),\n" +
    "(4396, 'Vale do Paraíso', 21),\n" +
    "(4397, 'Vilhena', 21),\n" +
    "(4398, 'Alto Alegre', 22),\n" +
    "(4399, 'Amajari', 22),\n" +
    "(4400, 'Boa Vista', 22),\n" +
    "(4401, 'Bonfim', 22),\n" +
    "(4402, 'Cantá', 22),\n" +
    "(4403, 'Caracaraí', 22),\n" +
    "(4404, 'Caroebe', 22),\n" +
    "(4405, 'Iracema', 22),\n" +
    "(4406, 'Mucajaí', 22),\n" +
    "(4407, 'Normandia', 22),\n" +
    "(4408, 'Pacaraima', 22),\n" +
    "(4409, 'Rorainópolis', 22),\n" +
    "(4410, 'São João da Baliza', 22),\n" +
    "(4411, 'São Luiz', 22),\n" +
    "(4412, 'Uiramutã', 22),\n" +
    "(4413, 'Abdon Batista', 24),\n" +
    "(4414, 'Abelardo Luz', 24),\n" +
    "(4415, 'Agrolândia', 24),\n" +
    "(4416, 'Agronômica', 24),\n" +
    "(4417, 'Água Doce', 24),\n" +
    "(4418, 'Águas de Chapecó', 24),\n" +
    "(4419, 'Águas Frias', 24),\n" +
    "(4420, 'Águas Mornas', 24),\n" +
    "(4421, 'Alfredo Wagner', 24),\n" +
    "(4422, 'Alto Bela Vista', 24),\n" +
    "(4423, 'Anchieta', 24),\n" +
    "(4424, 'Angelina', 24),\n" +
    "(4425, 'Anita Garibaldi', 24),\n" +
    "(4426, 'Anitápolis', 24),\n" +
    "(4427, 'Antônio Carlos', 24),\n" +
    "(4428, 'Apiúna', 24),\n" +
    "(4429, 'Arabutã', 24),\n" +
    "(4430, 'Araquari', 24),\n" +
    "(4431, 'Araranguá', 24),\n" +
    "(4432, 'Armazém', 24),\n" +
    "(4433, 'Arroio Trinta', 24),\n" +
    "(4434, 'Arvoredo', 24),\n" +
    "(4435, 'Ascurra', 24),\n" +
    "(4436, 'Atalanta', 24),\n" +
    "(4437, 'Aurora', 24),\n" +
    "(4438, 'Balneário Arroio do Silva', 24),\n" +
    "(4439, 'Balneário Barra do Sul', 24),\n" +
    "(4440, 'Balneário Camboriú', 24),\n" +
    "(4441, 'Balneário Gaivota', 24),\n" +
    "(4442, 'Bandeirante', 24),\n" +
    "(4443, 'Barra Bonita', 24),\n" +
    "(4444, 'Barra Velha', 24),\n" +
    "(4445, 'Bela Vista do Toldo', 24),\n" +
    "(4446, 'Belmonte', 24),\n" +
    "(4447, 'Benedito Novo', 24),\n" +
    "(4448, 'Biguaçu', 24),\n" +
    "(4449, 'Blumenau', 24),\n" +
    "(4450, 'Bocaina do Sul', 24),\n" +
    "(4451, 'Bom Jardim da Serra', 24),\n" +
    "(4452, 'Bom Jesus', 24),\n" +
    "(4453, 'Bom Jesus do Oeste', 24),\n" +
    "(4454, 'Bom Retiro', 24),\n" +
    "(4455, 'Bombinhas', 24),\n" +
    "(4456, 'Botuverá', 24),\n" +
    "(4457, 'Braço do Norte', 24),\n" +
    "(4458, 'Braço do Trombudo', 24),\n" +
    "(4459, 'Brunópolis', 24),\n" +
    "(4460, 'Brusque', 24),\n" +
    "(4461, 'Caçador', 24),\n" +
    "(4462, 'Caibi', 24),\n" +
    "(4463, 'Calmon', 24),\n" +
    "(4464, 'Camboriú', 24),\n" +
    "(4465, 'Campo Alegre', 24),\n" +
    "(4466, 'Campo Belo do Sul', 24),\n" +
    "(4467, 'Campo Erê', 24),\n" +
    "(4468, 'Campos Novos', 24),\n" +
    "(4469, 'Canelinha', 24),\n" +
    "(4470, 'Canoinhas', 24),\n" +
    "(4471, 'Capão Alto', 24),\n" +
    "(4472, 'Capinzal', 24),\n" +
    "(4473, 'Capivari de Baixo', 24),\n" +
    "(4474, 'Catanduvas', 24),\n" +
    "(4475, 'Caxambu do Sul', 24),\n" +
    "(4476, 'Celso Ramos', 24),\n" +
    "(4477, 'Cerro Negro', 24),\n" +
    "(4478, 'Chapadão do Lageado', 24),\n" +
    "(4479, 'Chapecó', 24),\n" +
    "(4480, 'Cocal do Sul', 24),\n" +
    "(4481, 'Concórdia', 24),\n" +
    "(4482, 'Cordilheira Alta', 24),\n" +
    "(4483, 'Coronel Freitas', 24),\n" +
    "(4484, 'Coronel Martins', 24),\n" +
    "(4485, 'Correia Pinto', 24),\n" +
    "(4486, 'Corupá', 24),\n" +
    "(4487, 'Criciúma', 24),\n" +
    "(4488, 'Cunha Porã', 24),\n" +
    "(4489, 'Cunhataí', 24),\n" +
    "(4490, 'Curitibanos', 24),\n" +
    "(4491, 'Descanso', 24),\n" +
    "(4492, 'Dionísio Cerqueira', 24),\n" +
    "(4493, 'Dona Emma', 24),\n" +
    "(4494, 'Doutor Pedrinho', 24),\n" +
    "(4495, 'Entre Rios', 24),\n" +
    "(4496, 'Ermo', 24),\n" +
    "(4497, 'Erval Velho', 24),\n" +
    "(4498, 'Faxinal dos Guedes', 24),\n" +
    "(4499, 'Flor do Sertão', 24),\n" +
    "(4500, 'Florianópolis', 24),\n" +
    "(4501, 'Formosa do Sul', 24),\n" +
    "(4502, 'Forquilhinha', 24),\n" +
    "(4503, 'Fraiburgo', 24),\n" +
    "(4504, 'Frei Rogério', 24),\n" +
    "(4505, 'Galvão', 24),\n" +
    "(4506, 'Garopaba', 24),\n" +
    "(4507, 'Garuva', 24);";

const sql10 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(4508, 'Gaspar', 24),\n" +
    "(4509, 'Governador Celso Ramos', 24),\n" +
    "(4510, 'Grão Pará', 24),\n" +
    "(4511, 'Gravatal', 24),\n" +
    "(4512, 'Guabiruba', 24),\n" +
    "(4513, 'Guaraciaba', 24),\n" +
    "(4514, 'Guaramirim', 24),\n" +
    "(4515, 'Guarujá do Sul', 24),\n" +
    "(4516, 'Guatambú', 24),\n" +
    "(4517, 'Herval dOeste', 24),\n" +
    "(4518, 'Ibiam', 24),\n" +
    "(4519, 'Ibicaré', 24),\n" +
    "(4520, 'Ibirama', 24),\n" +
    "(4521, 'Içara', 24),\n" +
    "(4522, 'Ilhota', 24),\n" +
    "(4523, 'Imaruí', 24),\n" +
    "(4524, 'Imbituba', 24),\n" +
    "(4525, 'Imbuia', 24),\n" +
    "(4526, 'Indaial', 24),\n" +
    "(4527, 'Iomerê', 24),\n" +
    "(4528, 'Ipira', 24),\n" +
    "(4529, 'Iporã do Oeste', 24),\n" +
    "(4530, 'Ipuaçu', 24),\n" +
    "(4531, 'Ipumirim', 24),\n" +
    "(4532, 'Iraceminha', 24),\n" +
    "(4533, 'Irani', 24),\n" +
    "(4534, 'Irati', 24),\n" +
    "(4535, 'Irineópolis', 24),\n" +
    "(4536, 'Itá', 24),\n" +
    "(4537, 'Itaiópolis', 24),\n" +
    "(4538, 'Itajaí', 24),\n" +
    "(4539, 'Itapema', 24),\n" +
    "(4540, 'Itapiranga', 24),\n" +
    "(4541, 'Itapoá', 24),\n" +
    "(4542, 'Ituporanga', 24),\n" +
    "(4543, 'Jaborá', 24),\n" +
    "(4544, 'Jacinto Machado', 24),\n" +
    "(4545, 'Jaguaruna', 24),\n" +
    "(4546, 'Jaraguá do Sul', 24),\n" +
    "(4547, 'Jardinópolis', 24),\n" +
    "(4548, 'Joaçaba', 24),\n" +
    "(4549, 'Joinville', 24),\n" +
    "(4550, 'José Boiteux', 24),\n" +
    "(4551, 'Jupiá', 24),\n" +
    "(4552, 'Lacerdópolis', 24),\n" +
    "(4553, 'Lages', 24),\n" +
    "(4554, 'Laguna', 24),\n" +
    "(4555, 'Lajeado Grande', 24),\n" +
    "(4556, 'Laurentino', 24),\n" +
    "(4557, 'Lauro Muller', 24),\n" +
    "(4558, 'Lebon Régis', 24),\n" +
    "(4559, 'Leoberto Leal', 24),\n" +
    "(4560, 'Lindóia do Sul', 24),\n" +
    "(4561, 'Lontras', 24),\n" +
    "(4562, 'Luiz Alves', 24),\n" +
    "(4563, 'Luzerna', 24),\n" +
    "(4564, 'Macieira', 24),\n" +
    "(4565, 'Mafra', 24),\n" +
    "(4566, 'Major Gercino', 24),\n" +
    "(4567, 'Major Vieira', 24),\n" +
    "(4568, 'Maracajá', 24),\n" +
    "(4569, 'Maravilha', 24),\n" +
    "(4570, 'Marema', 24),\n" +
    "(4571, 'Massaranduba', 24),\n" +
    "(4572, 'Matos Costa', 24),\n" +
    "(4573, 'Meleiro', 24),\n" +
    "(4574, 'Mirim Doce', 24),\n" +
    "(4575, 'Modelo', 24),\n" +
    "(4576, 'Mondaí', 24),\n" +
    "(4577, 'Monte Carlo', 24),\n" +
    "(4578, 'Monte Castelo', 24),\n" +
    "(4579, 'Morro da Fumaça', 24),\n" +
    "(4580, 'Morro Grande', 24),\n" +
    "(4581, 'Navegantes', 24),\n" +
    "(4582, 'Nova Erechim', 24),\n" +
    "(4583, 'Nova Itaberaba', 24),\n" +
    "(4584, 'Nova Trento', 24),\n" +
    "(4585, 'Nova Veneza', 24),\n" +
    "(4586, 'Novo Horizonte', 24),\n" +
    "(4587, 'Orleans', 24),\n" +
    "(4588, 'Otacílio Costa', 24),\n" +
    "(4589, 'Ouro', 24),\n" +
    "(4590, 'Ouro Verde', 24),\n" +
    "(4591, 'Paial', 24),\n" +
    "(4592, 'Painel', 24),\n" +
    "(4593, 'Palhoça', 24),\n" +
    "(4594, 'Palma Sola', 24),\n" +
    "(4595, 'Palmeira', 24),\n" +
    "(4596, 'Palmitos', 24),\n" +
    "(4597, 'Papanduva', 24),\n" +
    "(4598, 'Paraíso', 24),\n" +
    "(4599, 'Passo de Torres', 24),\n" +
    "(4600, 'Passos Maia', 24),\n" +
    "(4601, 'Paulo Lopes', 24),\n" +
    "(4602, 'Pedras Grandes', 24),\n" +
    "(4603, 'Penha', 24),\n" +
    "(4604, 'Peritiba', 24),\n" +
    "(4605, 'Petrolândia', 24),\n" +
    "(4606, 'Piçarras', 24),\n" +
    "(4607, 'Pinhalzinho', 24),\n" +
    "(4608, 'Pinheiro Preto', 24),\n" +
    "(4609, 'Piratuba', 24),\n" +
    "(4610, 'Planalto Alegre', 24),\n" +
    "(4611, 'Pomerode', 24),\n" +
    "(4612, 'Ponte Alta', 24),\n" +
    "(4613, 'Ponte Alta do Norte', 24),\n" +
    "(4614, 'Ponte Serrada', 24),\n" +
    "(4615, 'Porto Belo', 24),\n" +
    "(4616, 'Porto União', 24),\n" +
    "(4617, 'Pouso Redondo', 24),\n" +
    "(4618, 'Praia Grande', 24),\n" +
    "(4619, 'Presidente Castelo Branco', 24),\n" +
    "(4620, 'Presidente Getúlio', 24),\n" +
    "(4621, 'Presidente Nereu', 24),\n" +
    "(4622, 'Princesa', 24),\n" +
    "(4623, 'Quilombo', 24),\n" +
    "(4624, 'Rancho Queimado', 24),\n" +
    "(4625, 'Rio das Antas', 24),\n" +
    "(4626, 'Rio do Campo', 24),\n" +
    "(4627, 'Rio do Oeste', 24),\n" +
    "(4628, 'Rio do Sul', 24),\n" +
    "(4629, 'Rio dos Cedros', 24),\n" +
    "(4630, 'Rio Fortuna', 24),\n" +
    "(4631, 'Rio Negrinho', 24),\n" +
    "(4632, 'Rio Rufino', 24),\n" +
    "(4633, 'Riqueza', 24),\n" +
    "(4634, 'Rodeio', 24),\n" +
    "(4635, 'Romelândia', 24),\n" +
    "(4636, 'Salete', 24),\n" +
    "(4637, 'Saltinho', 24),\n" +
    "(4638, 'Salto Veloso', 24),\n" +
    "(4639, 'Sangão', 24),\n" +
    "(4640, 'Santa Cecília', 24),\n" +
    "(4641, 'Santa Helena', 24),\n" +
    "(4642, 'Santa Rosa de Lima', 24),\n" +
    "(4643, 'Santa Rosa do Sul', 24),\n" +
    "(4644, 'Santa Terezinha', 24),\n" +
    "(4645, 'Santa Terezinha do Progresso', 24),\n" +
    "(4646, 'Santiago do Sul', 24),\n" +
    "(4647, 'Santo Amaro da Imperatriz', 24),\n" +
    "(4648, 'São Bento do Sul', 24),\n" +
    "(4649, 'São Bernardino', 24),\n" +
    "(4650, 'São Bonifácio', 24),\n" +
    "(4651, 'São Carlos', 24),\n" +
    "(4652, 'São Cristovão do Sul', 24),\n" +
    "(4653, 'São Domingos', 24),\n" +
    "(4654, 'São Francisco do Sul', 24),\n" +
    "(4655, 'São João Batista', 24),\n" +
    "(4656, 'São João do Itaperiú', 24),\n" +
    "(4657, 'São João do Oeste', 24),\n" +
    "(4658, 'São João do Sul', 24),\n" +
    "(4659, 'São Joaquim', 24),\n" +
    "(4660, 'São José', 24),\n" +
    "(4661, 'São José do Cedro', 24),\n" +
    "(4662, 'São José do Cerrito', 24),\n" +
    "(4663, 'São Lourenço do Oeste', 24),\n" +
    "(4664, 'São Ludgero', 24),\n" +
    "(4665, 'São Martinho', 24),\n" +
    "(4666, 'São Miguel da Boa Vista', 24),\n" +
    "(4667, 'São Miguel do Oeste', 24),\n" +
    "(4668, 'São Pedro de Alcântara', 24),\n" +
    "(4669, 'Saudades', 24),\n" +
    "(4670, 'Schroeder', 24),\n" +
    "(4671, 'Seara', 24),\n" +
    "(4672, 'Serra Alta', 24),\n" +
    "(4673, 'Siderópolis', 24),\n" +
    "(4674, 'Sombrio', 24),\n" +
    "(4675, 'Sul Brasil', 24),\n" +
    "(4676, 'Taió', 24),\n" +
    "(4677, 'Tangará', 24),\n" +
    "(4678, 'Tigrinhos', 24),\n" +
    "(4679, 'Tijucas', 24),\n" +
    "(4680, 'Timbé do Sul', 24),\n" +
    "(4681, 'Timbó', 24),\n" +
    "(4682, 'Timbó Grande', 24),\n" +
    "(4683, 'Três Barras', 24),\n" +
    "(4684, 'Treviso', 24),\n" +
    "(4685, 'Treze de Maio', 24),\n" +
    "(4686, 'Treze Tílias', 24),\n" +
    "(4687, 'Trombudo Central', 24),\n" +
    "(4688, 'Tubarão', 24),\n" +
    "(4689, 'Tunápolis', 24),\n" +
    "(4690, 'Turvo', 24),\n" +
    "(4691, 'União do Oeste', 24),\n" +
    "(4692, 'Urubici', 24),\n" +
    "(4693, 'Urupema', 24),\n" +
    "(4694, 'Urussanga', 24),\n" +
    "(4695, 'Vargeão', 24),\n" +
    "(4696, 'Vargem', 24),\n" +
    "(4697, 'Vargem Bonita', 24),\n" +
    "(4698, 'Vidal Ramos', 24),\n" +
    "(4699, 'Videira', 24),\n" +
    "(4700, 'Vitor Meireles', 24),\n" +
    "(4701, 'Witmarsum', 24),\n" +
    "(4702, 'Xanxerê', 24),\n" +
    "(4703, 'Xavantina', 24),\n" +
    "(4704, 'Xaxim', 24),\n" +
    "(4705, 'Zortéa', 24),\n" +
    "(4706, 'Adamantina', 26),\n" +
    "(4707, 'Adolfo', 26),\n" +
    "(4708, 'Aguaí', 26),\n" +
    "(4709, 'Águas da Prata', 26),\n" +
    "(4710, 'Águas de Lindóia', 26),\n" +
    "(4711, 'Águas de Santa Bárbara', 26),\n" +
    "(4712, 'Águas de São Pedro', 26),\n" +
    "(4713, 'Agudos', 26),\n" +
    "(4714, 'Alambari', 26),\n" +
    "(4715, 'Alfredo Marcondes', 26),\n" +
    "(4716, 'Altair', 26),\n" +
    "(4717, 'Altinópolis', 26),\n" +
    "(4718, 'Alto Alegre', 26),\n" +
    "(4719, 'Alumínio', 26),\n" +
    "(4720, 'Álvares Florence', 26),\n" +
    "(4721, 'Álvares Machado', 26),\n" +
    "(4722, 'Álvaro de Carvalho', 26),\n" +
    "(4723, 'Alvinlândia', 26),\n" +
    "(4724, 'Americana', 26),\n" +
    "(4725, 'Américo Brasiliense', 26),\n" +
    "(4726, 'Américo de Campos', 26),\n" +
    "(4727, 'Amparo', 26),\n" +
    "(4728, 'Analândia', 26),\n" +
    "(4729, 'Andradina', 26),\n" +
    "(4730, 'Angatuba', 26),\n" +
    "(4731, 'Anhembi', 26),\n" +
    "(4732, 'Anhumas', 26),\n" +
    "(4733, 'Aparecida', 26),\n" +
    "(4734, 'Aparecida dOeste', 26),\n" +
    "(4735, 'Apiaí', 26),\n" +
    "(4736, 'Araçariguama', 26),\n" +
    "(4737, 'Araçatuba', 26),\n" +
    "(4738, 'Araçoiaba da Serra', 26),\n" +
    "(4739, 'Aramina', 26),\n" +
    "(4740, 'Arandu', 26),\n" +
    "(4741, 'Arapeí', 26),\n" +
    "(4742, 'Araraquara', 26),\n" +
    "(4743, 'Araras', 26),\n" +
    "(4744, 'Arco-Íris', 26),\n" +
    "(4745, 'Arealva', 26),\n" +
    "(4746, 'Areias', 26),\n" +
    "(4747, 'Areiópolis', 26),\n" +
    "(4748, 'Ariranha', 26),\n" +
    "(4749, 'Artur Nogueira', 26),\n" +
    "(4750, 'Arujá', 26),\n" +
    "(4751, 'Aspásia', 26),\n" +
    "(4752, 'Assis', 26),\n" +
    "(4753, 'Atibaia', 26),\n" +
    "(4754, 'Auriflama', 26),\n" +
    "(4755, 'Avaí', 26),\n" +
    "(4756, 'Avanhandava', 26),\n" +
    "(4757, 'Avaré', 26),\n" +
    "(4758, 'Bady Bassitt', 26),\n" +
    "(4759, 'Balbinos', 26),\n" +
    "(4760, 'Bálsamo', 26),\n" +
    "(4761, 'Bananal', 26),\n" +
    "(4762, 'Barão de Antonina', 26),\n" +
    "(4763, 'Barbosa', 26),\n" +
    "(4764, 'Bariri', 26),\n" +
    "(4765, 'Barra Bonita', 26),\n" +
    "(4766, 'Barra do Chapéu', 26),\n" +
    "(4767, 'Barra do Turvo', 26),\n" +
    "(4768, 'Barretos', 26),\n" +
    "(4769, 'Barrinha', 26),\n" +
    "(4770, 'Barueri', 26),\n" +
    "(4771, 'Bastos', 26),\n" +
    "(4772, 'Batatais', 26),\n" +
    "(4773, 'Bauru', 26),\n" +
    "(4774, 'Bebedouro', 26),\n" +
    "(4775, 'Bento de Abreu', 26),\n" +
    "(4776, 'Bernardino de Campos', 26),\n" +
    "(4777, 'Bertioga', 26),\n" +
    "(4778, 'Bilac', 26),\n" +
    "(4779, 'Birigui', 26),\n" +
    "(4780, 'Biritiba-Mirim', 26),\n" +
    "(4781, 'Boa Esperança do Sul', 26),\n" +
    "(4782, 'Bocaina', 26),\n" +
    "(4783, 'Bofete', 26),\n" +
    "(4784, 'Boituva', 26),\n" +
    "(4785, 'Bom Jesus dos Perdões', 26),\n" +
    "(4786, 'Bom Sucesso de Itararé', 26),\n" +
    "(4787, 'Borá', 26),\n" +
    "(4788, 'Boracéia', 26),\n" +
    "(4789, 'Borborema', 26),\n" +
    "(4790, 'Borebi', 26),\n" +
    "(4791, 'Botucatu', 26),\n" +
    "(4792, 'Bragança Paulista', 26),\n" +
    "(4793, 'Braúna', 26),\n" +
    "(4794, 'Brejo Alegre', 26),\n" +
    "(4795, 'Brodowski', 26),\n" +
    "(4796, 'Brotas', 26),\n" +
    "(4797, 'Buri', 26),\n" +
    "(4798, 'Buritama', 26),\n" +
    "(4799, 'Buritizal', 26),\n" +
    "(4800, 'Cabrália Paulista', 26),\n" +
    "(4801, 'Cabreúva', 26),\n" +
    "(4802, 'Caçapava', 26),\n" +
    "(4803, 'Cachoeira Paulista', 26),\n" +
    "(4804, 'Caconde', 26),\n" +
    "(4805, 'Cafelândia', 26),\n" +
    "(4806, 'Caiabu', 26),\n" +
    "(4807, 'Caieiras', 26),\n" +
    "(4808, 'Caiuá', 26),\n" +
    "(4809, 'Cajamar', 26),\n" +
    "(4810, 'Cajati', 26),\n" +
    "(4811, 'Cajobi', 26),\n" +
    "(4812, 'Cajuru', 26),\n" +
    "(4813, 'Campina do Monte Alegre', 26),\n" +
    "(4814, 'Campinas', 26),\n" +
    "(4815, 'Campo Limpo Paulista', 26),\n" +
    "(4816, 'Campos do Jordão', 26),\n" +
    "(4817, 'Campos Novos Paulista', 26),\n" +
    "(4818, 'Cananéia', 26),\n" +
    "(4819, 'Canas', 26),\n" +
    "(4820, 'Cândido Mota', 26),\n" +
    "(4821, 'Cândido Rodrigues', 26),\n" +
    "(4822, 'Canitar', 26),\n" +
    "(4823, 'Capão Bonito', 26),\n" +
    "(4824, 'Capela do Alto', 26),\n" +
    "(4825, 'Capivari', 26),\n" +
    "(4826, 'Caraguatatuba', 26),\n" +
    "(4827, 'Carapicuíba', 26),\n" +
    "(4828, 'Cardoso', 26),\n" +
    "(4829, 'Casa Branca', 26),\n" +
    "(4830, 'Cássia dos Coqueiros', 26),\n" +
    "(4831, 'Castilho', 26),\n" +
    "(4832, 'Catanduva', 26),\n" +
    "(4833, 'Catiguá', 26),\n" +
    "(4834, 'Cedral', 26),\n" +
    "(4835, 'Cerqueira César', 26),\n" +
    "(4836, 'Cerquilho', 26),\n" +
    "(4837, 'Cesário Lange', 26),\n" +
    "(4838, 'Charqueada', 26),\n" +
    "(4839, 'Chavantes', 26),\n" +
    "(4840, 'Clementina', 26),\n" +
    "(4841, 'Colina', 26),\n" +
    "(4842, 'Colômbia', 26),\n" +
    "(4843, 'Conchal', 26),\n" +
    "(4844, 'Conchas', 26),\n" +
    "(4845, 'Cordeirópolis', 26),\n" +
    "(4846, 'Coroados', 26),\n" +
    "(4847, 'Coronel Macedo', 26),\n" +
    "(4848, 'Corumbataí', 26),\n" +
    "(4849, 'Cosmópolis', 26),\n" +
    "(4850, 'Cosmorama', 26),\n" +
    "(4851, 'Cotia', 26),\n" +
    "(4852, 'Cravinhos', 26),\n" +
    "(4853, 'Cristais Paulista', 26),\n" +
    "(4854, 'Cruzália', 26),\n" +
    "(4855, 'Cruzeiro', 26),\n" +
    "(4856, 'Cubatão', 26),\n" +
    "(4857, 'Cunha', 26),\n" +
    "(4858, 'Descalvado', 26),\n" +
    "(4859, 'Diadema', 26),\n" +
    "(4860, 'Dirce Reis', 26),\n" +
    "(4861, 'Divinolândia', 26),\n" +
    "(4862, 'Dobrada', 26),\n" +
    "(4863, 'Dois Córregos', 26),\n" +
    "(4864, 'Dolcinópolis', 26),\n" +
    "(4865, 'Dourado', 26),\n" +
    "(4866, 'Dracena', 26),\n" +
    "(4867, 'Duartina', 26),\n" +
    "(4868, 'Dumont', 26),\n" +
    "(4869, 'Echaporã', 26),\n" +
    "(4870, 'Eldorado', 26),\n" +
    "(4871, 'Elias Fausto', 26),\n" +
    "(4872, 'Elisiário', 26),\n" +
    "(4873, 'Embaúba', 26),\n" +
    "(4874, 'Embu', 26),\n" +
    "(4875, 'Embu-Guaçu', 26),\n" +
    "(4876, 'Emilianópolis', 26),\n" +
    "(4877, 'Engenheiro Coelho', 26),\n" +
    "(4878, 'Espírito Santo do Pinhal', 26),\n" +
    "(4879, 'Espírito Santo do Turvo', 26),\n" +
    "(4880, 'Estiva Gerbi', 26),\n" +
    "(4881, 'Estrela dOeste', 26),\n" +
    "(4882, 'Estrela do Norte', 26),\n" +
    "(4883, 'Euclides da Cunha Paulista', 26),\n" +
    "(4884, 'Fartura', 26),\n" +
    "(4885, 'Fernando Prestes', 26),\n" +
    "(4886, 'Fernandópolis', 26),\n" +
    "(4887, 'Fernão', 26),\n" +
    "(4888, 'Ferraz de Vasconcelos', 26),\n" +
    "(4889, 'Flora Rica', 26),\n" +
    "(4890, 'Floreal', 26),\n" +
    "(4891, 'Flórida Paulista', 26),\n" +
    "(4892, 'Florínia', 26),\n" +
    "(4893, 'Franca', 26),\n" +
    "(4894, 'Francisco Morato', 26),\n" +
    "(4895, 'Franco da Rocha', 26),\n" +
    "(4896, 'Gabriel Monteiro', 26),\n" +
    "(4897, 'Gália', 26),\n" +
    "(4898, 'Garça', 26),\n" +
    "(4899, 'Gastão Vidigal', 26),\n" +
    "(4900, 'Gavião Peixoto', 26),\n" +
    "(4901, 'General Salgado', 26),\n" +
    "(4902, 'Getulina', 26),\n" +
    "(4903, 'Glicério', 26),\n" +
    "(4904, 'Guaiçara', 26),\n" +
    "(4905, 'Guaimbê', 26),\n" +
    "(4906, 'Guaíra', 26),\n" +
    "(4907, 'Guapiaçu', 26),\n" +
    "(4908, 'Guapiara', 26),\n" +
    "(4909, 'Guará', 26),\n" +
    "(4910, 'Guaraçaí', 26),\n" +
    "(4911, 'Guaraci', 26),\n" +
    "(4912, 'Guarani dOeste', 26),\n" +
    "(4913, 'Guarantã', 26),\n" +
    "(4914, 'Guararapes', 26),\n" +
    "(4915, 'Guararema', 26),\n" +
    "(4916, 'Guaratinguetá', 26),\n" +
    "(4917, 'Guareí', 26),\n" +
    "(4918, 'Guariba', 26),\n" +
    "(4919, 'Guarujá', 26),\n" +
    "(4920, 'Guarulhos', 26),\n" +
    "(4921, 'Guatapará', 26),\n" +
    "(4922, 'Guzolândia', 26),\n" +
    "(4923, 'Herculândia', 26),\n" +
    "(4924, 'Holambra', 26),\n" +
    "(4925, 'Hortolândia', 26),\n" +
    "(4926, 'Iacanga', 26),\n" +
    "(4927, 'Iacri', 26),\n" +
    "(4928, 'Iaras', 26),\n" +
    "(4929, 'Ibaté', 26),\n" +
    "(4930, 'Ibirá', 26),\n" +
    "(4931, 'Ibirarema', 26),\n" +
    "(4932, 'Ibitinga', 26),\n" +
    "(4933, 'Ibiúna', 26),\n" +
    "(4934, 'Icém', 26),\n" +
    "(4935, 'Iepê', 26),\n" +
    "(4936, 'Igaraçu do Tietê', 26),\n" +
    "(4937, 'Igarapava', 26),\n" +
    "(4938, 'Igaratá', 26),\n" +
    "(4939, 'Iguape', 26),\n" +
    "(4940, 'Ilha Comprida', 26),\n" +
    "(4941, 'Ilha Solteira', 26),\n" +
    "(4942, 'Ilhabela', 26),\n" +
    "(4943, 'Indaiatuba', 26),\n" +
    "(4944, 'Indiana', 26),\n" +
    "(4945, 'Indiaporã', 26),\n" +
    "(4946, 'Inúbia Paulista', 26),\n" +
    "(4947, 'Ipaussu', 26),\n" +
    "(4948, 'Iperó', 26),\n" +
    "(4949, 'Ipeúna', 26),\n" +
    "(4950, 'Ipiguá', 26),\n" +
    "(4951, 'Iporanga', 26),\n" +
    "(4952, 'Ipuã', 26),\n" +
    "(4953, 'Iracemápolis', 26),\n" +
    "(4954, 'Irapuã', 26),\n" +
    "(4955, 'Irapuru', 26),\n" +
    "(4956, 'Itaberá', 26),\n" +
    "(4957, 'Itaí', 26),\n" +
    "(4958, 'Itajobi', 26),\n" +
    "(4959, 'Itaju', 26),\n" +
    "(4960, 'Itanhaém', 26),\n" +
    "(4961, 'Itaóca', 26),\n" +
    "(4962, 'Itapecerica da Serra', 26),\n" +
    "(4963, 'Itapetininga', 26),\n" +
    "(4964, 'Itapeva', 26),\n" +
    "(4965, 'Itapevi', 26),\n" +
    "(4966, 'Itapira', 26),\n" +
    "(4967, 'Itapirapuã Paulista', 26),\n" +
    "(4968, 'Itápolis', 26),\n" +
    "(4969, 'Itaporanga', 26),\n" +
    "(4970, 'Itapuí', 26),\n" +
    "(4971, 'Itapura', 26),\n" +
    "(4972, 'Itaquaquecetuba', 26),\n" +
    "(4973, 'Itararé', 26),\n" +
    "(4974, 'Itariri', 26),\n" +
    "(4975, 'Itatiba', 26),\n" +
    "(4976, 'Itatinga', 26),\n" +
    "(4977, 'Itirapina', 26),\n" +
    "(4978, 'Itirapuã', 26),\n" +
    "(4979, 'Itobi', 26),\n" +
    "(4980, 'Itu', 26),\n" +
    "(4981, 'Itupeva', 26),\n" +
    "(4982, 'Ituverava', 26),\n" +
    "(4983, 'Jaborandi', 26),\n" +
    "(4984, 'Jaboticabal', 26),\n" +
    "(4985, 'Jacareí', 26),\n" +
    "(4986, 'Jaci', 26),\n" +
    "(4987, 'Jacupiranga', 26),\n" +
    "(4988, 'Jaguariúna', 26),\n" +
    "(4989, 'Jales', 26),\n" +
    "(4990, 'Jambeiro', 26),\n" +
    "(4991, 'Jandira', 26),\n" +
    "(4992, 'Jardinópolis', 26),\n" +
    "(4993, 'Jarinu', 26),\n" +
    "(4994, 'Jaú', 26),\n" +
    "(4995, 'Jeriquara', 26),\n" +
    "(4996, 'Joanópolis', 26),\n" +
    "(4997, 'João Ramalho', 26),\n" +
    "(4998, 'José Bonifácio', 26),\n" +
    "(4999, 'Júlio Mesquita', 26),\n" +
    "(5000, 'Jumirim', 26),\n" +
    "(5001, 'Jundiaí', 26),\n" +
    "(5002, 'Junqueirópolis', 26),\n" +
    "(5003, 'Juquiá', 26),\n" +
    "(5004, 'Juquitiba', 26),\n" +
    "(5005, 'Lagoinha', 26),\n" +
    "(5006, 'Laranjal Paulista', 26),\n" +
    "(5007, 'Lavínia', 26),\n" +
    "(5008, 'Lavrinhas', 26),\n" +
    "(5009, 'Leme', 26),\n" +
    "(5010, 'Lençóis Paulista', 26),\n" +
    "(5011, 'Limeira', 26),\n" +
    "(5012, 'Lindóia', 26),\n" +
    "(5013, 'Lins', 26),\n" +
    "(5014, 'Lorena', 26),\n" +
    "(5015, 'Lourdes', 26),\n" +
    "(5016, 'Louveira', 26),\n" +
    "(5017, 'Lucélia', 26),\n" +
    "(5018, 'Lucianópolis', 26),\n" +
    "(5019, 'Luís Antônio', 26),\n" +
    "(5020, 'Luiziânia', 26),\n" +
    "(5021, 'Lupércio', 26),\n" +
    "(5022, 'Lutécia', 26),\n" +
    "(5023, 'Macatuba', 26),\n" +
    "(5024, 'Macaubal', 26),\n" +
    "(5025, 'Macedônia', 26),\n" +
    "(5026, 'Magda', 26),\n" +
    "(5027, 'Mairinque', 26),\n" +
    "(5028, 'Mairiporã', 26),\n" +
    "(5029, 'Manduri', 26),\n" +
    "(5030, 'Marabá Paulista', 26);";

const sql11 = "INSERT INTO cities (id, name, state) VALUES\n" +
    "(5031, 'Maracaí', 26),\n" +
    "(5032, 'Marapoama', 26),\n" +
    "(5033, 'Mariápolis', 26),\n" +
    "(5034, 'Marília', 26),\n" +
    "(5035, 'Marinópolis', 26),\n" +
    "(5036, 'Martinópolis', 26),\n" +
    "(5037, 'Matão', 26),\n" +
    "(5038, 'Mauá', 26),\n" +
    "(5039, 'Mendonça', 26),\n" +
    "(5040, 'Meridiano', 26),\n" +
    "(5041, 'Mesópolis', 26),\n" +
    "(5042, 'Miguelópolis', 26),\n" +
    "(5043, 'Mineiros do Tietê', 26),\n" +
    "(5044, 'Mira Estrela', 26),\n" +
    "(5045, 'Miracatu', 26),\n" +
    "(5046, 'Mirandópolis', 26),\n" +
    "(5047, 'Mirante do Paranapanema', 26),\n" +
    "(5048, 'Mirassol', 26),\n" +
    "(5049, 'Mirassolândia', 26),\n" +
    "(5050, 'Mococa', 26),\n" +
    "(5051, 'Mogi das Cruzes', 26),\n" +
    "(5052, 'Mogi Guaçu', 26),\n" +
    "(5053, 'Moji Mirim', 26),\n" +
    "(5054, 'Mombuca', 26),\n" +
    "(5055, 'Monções', 26),\n" +
    "(5056, 'Mongaguá', 26),\n" +
    "(5057, 'Monte Alegre do Sul', 26),\n" +
    "(5058, 'Monte Alto', 26),\n" +
    "(5059, 'Monte Aprazível', 26),\n" +
    "(5060, 'Monte Azul Paulista', 26),\n" +
    "(5061, 'Monte Castelo', 26),\n" +
    "(5062, 'Monte Mor', 26),\n" +
    "(5063, 'Monteiro Lobato', 26),\n" +
    "(5064, 'Morro Agudo', 26),\n" +
    "(5065, 'Morungaba', 26),\n" +
    "(5066, 'Motuca', 26),\n" +
    "(5067, 'Murutinga do Sul', 26),\n" +
    "(5068, 'Nantes', 26),\n" +
    "(5069, 'Narandiba', 26),\n" +
    "(5070, 'Natividade da Serra', 26),\n" +
    "(5071, 'Nazaré Paulista', 26),\n" +
    "(5072, 'Neves Paulista', 26),\n" +
    "(5073, 'Nhandeara', 26),\n" +
    "(5074, 'Nipoã', 26),\n" +
    "(5075, 'Nova Aliança', 26),\n" +
    "(5076, 'Nova Campina', 26),\n" +
    "(5077, 'Nova Canaã Paulista', 26),\n" +
    "(5078, 'Nova Castilho', 26),\n" +
    "(5079, 'Nova Europa', 26),\n" +
    "(5080, 'Nova Granada', 26),\n" +
    "(5081, 'Nova Guataporanga', 26),\n" +
    "(5082, 'Nova Independência', 26),\n" +
    "(5083, 'Nova Luzitânia', 26),\n" +
    "(5084, 'Nova Odessa', 26),\n" +
    "(5085, 'Novais', 26),\n" +
    "(5086, 'Novo Horizonte', 26),\n" +
    "(5087, 'Nuporanga', 26),\n" +
    "(5088, 'Ocauçu', 26),\n" +
    "(5089, 'Óleo', 26),\n" +
    "(5090, 'Olímpia', 26),\n" +
    "(5091, 'Onda Verde', 26),\n" +
    "(5092, 'Oriente', 26),\n" +
    "(5093, 'Orindiúva', 26),\n" +
    "(5094, 'Orlândia', 26),\n" +
    "(5095, 'Osasco', 26),\n" +
    "(5096, 'Oscar Bressane', 26),\n" +
    "(5097, 'Osvaldo Cruz', 26),\n" +
    "(5098, 'Ourinhos', 26),\n" +
    "(5099, 'Ouro Verde', 26),\n" +
    "(5100, 'Ouroeste', 26),\n" +
    "(5101, 'Pacaembu', 26),\n" +
    "(5102, 'Palestina', 26),\n" +
    "(5103, 'Palmares Paulista', 26),\n" +
    "(5104, 'Palmeira dOeste', 26),\n" +
    "(5105, 'Palmital', 26),\n" +
    "(5106, 'Panorama', 26),\n" +
    "(5107, 'Paraguaçu Paulista', 26),\n" +
    "(5108, 'Paraibuna', 26),\n" +
    "(5109, 'Paraíso', 26),\n" +
    "(5110, 'Paranapanema', 26),\n" +
    "(5111, 'Paranapuã', 26),\n" +
    "(5112, 'Parapuã', 26),\n" +
    "(5113, 'Pardinho', 26),\n" +
    "(5114, 'Pariquera-Açu', 26),\n" +
    "(5115, 'Parisi', 26),\n" +
    "(5116, 'Patrocínio Paulista', 26),\n" +
    "(5117, 'Paulicéia', 26),\n" +
    "(5118, 'Paulínia', 26),\n" +
    "(5119, 'Paulistânia', 26),\n" +
    "(5120, 'Paulo de Faria', 26),\n" +
    "(5121, 'Pederneiras', 26),\n" +
    "(5122, 'Pedra Bela', 26),\n" +
    "(5123, 'Pedranópolis', 26),\n" +
    "(5124, 'Pedregulho', 26),\n" +
    "(5125, 'Pedreira', 26),\n" +
    "(5126, 'Pedrinhas Paulista', 26),\n" +
    "(5127, 'Pedro de Toledo', 26),\n" +
    "(5128, 'Penápolis', 26),\n" +
    "(5129, 'Pereira Barreto', 26),\n" +
    "(5130, 'Pereiras', 26),\n" +
    "(5131, 'Peruíbe', 26),\n" +
    "(5132, 'Piacatu', 26),\n" +
    "(5133, 'Piedade', 26),\n" +
    "(5134, 'Pilar do Sul', 26),\n" +
    "(5135, 'Pindamonhangaba', 26),\n" +
    "(5136, 'Pindorama', 26),\n" +
    "(5137, 'Pinhalzinho', 26),\n" +
    "(5138, 'Piquerobi', 26),\n" +
    "(5139, 'Piquete', 26),\n" +
    "(5140, 'Piracaia', 26),\n" +
    "(5141, 'Piracicaba', 26),\n" +
    "(5142, 'Piraju', 26),\n" +
    "(5143, 'Pirajuí', 26),\n" +
    "(5144, 'Pirangi', 26),\n" +
    "(5145, 'Pirapora do Bom Jesus', 26),\n" +
    "(5146, 'Pirapozinho', 26),\n" +
    "(5147, 'Pirassununga', 26),\n" +
    "(5148, 'Piratininga', 26),\n" +
    "(5149, 'Pitangueiras', 26),\n" +
    "(5150, 'Planalto', 26),\n" +
    "(5151, 'Platina', 26),\n" +
    "(5152, 'Poá', 26),\n" +
    "(5153, 'Poloni', 26),\n" +
    "(5154, 'Pompéia', 26),\n" +
    "(5155, 'Pongaí', 26),\n" +
    "(5156, 'Pontal', 26),\n" +
    "(5157, 'Pontalinda', 26),\n" +
    "(5158, 'Pontes Gestal', 26),\n" +
    "(5159, 'Populina', 26),\n" +
    "(5160, 'Porangaba', 26),\n" +
    "(5161, 'Porto Feliz', 26),\n" +
    "(5162, 'Porto Ferreira', 26),\n" +
    "(5163, 'Potim', 26),\n" +
    "(5164, 'Potirendaba', 26),\n" +
    "(5165, 'Pracinha', 26),\n" +
    "(5166, 'Pradópolis', 26),\n" +
    "(5167, 'Praia Grande', 26),\n" +
    "(5168, 'Pratânia', 26),\n" +
    "(5169, 'Presidente Alves', 26),\n" +
    "(5170, 'Presidente Bernardes', 26),\n" +
    "(5171, 'Presidente Epitácio', 26),\n" +
    "(5172, 'Presidente Prudente', 26),\n" +
    "(5173, 'Presidente Venceslau', 26),\n" +
    "(5174, 'Promissão', 26),\n" +
    "(5175, 'Quadra', 26),\n" +
    "(5176, 'Quatá', 26),\n" +
    "(5177, 'Queiroz', 26),\n" +
    "(5178, 'Queluz', 26),\n" +
    "(5179, 'Quintana', 26),\n" +
    "(5180, 'Rafard', 26),\n" +
    "(5181, 'Rancharia', 26),\n" +
    "(5182, 'Redenção da Serra', 26),\n" +
    "(5183, 'Regente Feijó', 26),\n" +
    "(5184, 'Reginópolis', 26),\n" +
    "(5185, 'Registro', 26),\n" +
    "(5186, 'Restinga', 26),\n" +
    "(5187, 'Ribeira', 26),\n" +
    "(5188, 'Ribeirão Bonito', 26),\n" +
    "(5189, 'Ribeirão Branco', 26),\n" +
    "(5190, 'Ribeirão Corrente', 26),\n" +
    "(5191, 'Ribeirão do Sul', 26),\n" +
    "(5192, 'Ribeirão dos Índios', 26),\n" +
    "(5193, 'Ribeirão Grande', 26),\n" +
    "(5194, 'Ribeirão Pires', 26),\n" +
    "(5195, 'Ribeirão Preto', 26),\n" +
    "(5196, 'Rifaina', 26),\n" +
    "(5197, 'Rincão', 26),\n" +
    "(5198, 'Rinópolis', 26),\n" +
    "(5199, 'Rio Claro', 26),\n" +
    "(5200, 'Rio das Pedras', 26),\n" +
    "(5201, 'Rio Grande da Serra', 26),\n" +
    "(5202, 'Riolândia', 26),\n" +
    "(5203, 'Riversul', 26),\n" +
    "(5204, 'Rosana', 26),\n" +
    "(5205, 'Roseira', 26),\n" +
    "(5206, 'Rubiácea', 26),\n" +
    "(5207, 'Rubinéia', 26),\n" +
    "(5208, 'Sabino', 26),\n" +
    "(5209, 'Sagres', 26),\n" +
    "(5210, 'Sales', 26),\n" +
    "(5211, 'Sales Oliveira', 26),\n" +
    "(5212, 'Salesópolis', 26),\n" +
    "(5213, 'Salmourão', 26),\n" +
    "(5214, 'Saltinho', 26),\n" +
    "(5215, 'Salto', 26),\n" +
    "(5216, 'Salto de Pirapora', 26),\n" +
    "(5217, 'Salto Grande', 26),\n" +
    "(5218, 'Sandovalina', 26),\n" +
    "(5219, 'Santa Adélia', 26),\n" +
    "(5220, 'Santa Albertina', 26),\n" +
    "(5221, 'Santa Bárbara dOeste', 26),\n" +
    "(5222, 'Santa Branca', 26),\n" +
    "(5223, 'Santa Clara dOeste', 26),\n" +
    "(5224, 'Santa Cruz da Conceição', 26),\n" +
    "(5225, 'Santa Cruz da Esperança', 26),\n" +
    "(5226, 'Santa Cruz das Palmeiras', 26),\n" +
    "(5227, 'Santa Cruz do Rio Pardo', 26),\n" +
    "(5228, 'Santa Ernestina', 26),\n" +
    "(5229, 'Santa Fé do Sul', 26),\n" +
    "(5230, 'Santa Gertrudes', 26),\n" +
    "(5231, 'Santa Isabel', 26),\n" +
    "(5232, 'Santa Lúcia', 26),\n" +
    "(5233, 'Santa Maria da Serra', 26),\n" +
    "(5234, 'Santa Mercedes', 26),\n" +
    "(5235, 'Santa Rita dOeste', 26),\n" +
    "(5236, 'Santa Rita do Passa Quatro', 26),\n" +
    "(5237, 'Santa Rosa de Viterbo', 26),\n" +
    "(5238, 'Santa Salete', 26),\n" +
    "(5239, 'Santana da Ponte Pensa', 26),\n" +
    "(5240, 'Santana de Parnaíba', 26),\n" +
    "(5241, 'Santo Anastácio', 26),\n" +
    "(5242, 'Santo André', 26),\n" +
    "(5243, 'Santo Antônio da Alegria', 26),\n" +
    "(5244, 'Santo Antônio de Posse', 26),\n" +
    "(5245, 'Santo Antônio do Aracanguá', 26),\n" +
    "(5246, 'Santo Antônio do Jardim', 26),\n" +
    "(5247, 'Santo Antônio do Pinhal', 26),\n" +
    "(5248, 'Santo Expedito', 26),\n" +
    "(5249, 'Santópolis do Aguapeí', 26),\n" +
    "(5250, 'Santos', 26),\n" +
    "(5251, 'São Bento do Sapucaí', 26),\n" +
    "(5252, 'São Bernardo do Campo', 26),\n" +
    "(5253, 'São Caetano do Sul', 26),\n" +
    "(5254, 'São Carlos', 26),\n" +
    "(5255, 'São Francisco', 26),\n" +
    "(5256, 'São João da Boa Vista', 26),\n" +
    "(5257, 'São João das Duas Pontes', 26),\n" +
    "(5258, 'São João de Iracema', 26),\n" +
    "(5259, 'São João do Pau dAlho', 26),\n" +
    "(5260, 'São Joaquim da Barra', 26),\n" +
    "(5261, 'São José da Bela Vista', 26),\n" +
    "(5262, 'São José do Barreiro', 26),\n" +
    "(5263, 'São José do Rio Pardo', 26),\n" +
    "(5264, 'São José do Rio Preto', 26),\n" +
    "(5265, 'São José dos Campos', 26),\n" +
    "(5266, 'São Lourenço da Serra', 26),\n" +
    "(5267, 'São Luís do Paraitinga', 26),\n" +
    "(5268, 'São Manuel', 26),\n" +
    "(5269, 'São Miguel Arcanjo', 26),\n" +
    "(5270, 'São Paulo', 26),\n" +
    "(5271, 'São Pedro', 26),\n" +
    "(5272, 'São Pedro do Turvo', 26),\n" +
    "(5273, 'São Roque', 26),\n" +
    "(5274, 'São Sebastião', 26),\n" +
    "(5275, 'São Sebastião da Grama', 26),\n" +
    "(5276, 'São Simão', 26),\n" +
    "(5277, 'São Vicente', 26),\n" +
    "(5278, 'Sarapuí', 26),\n" +
    "(5279, 'Sarutaiá', 26),\n" +
    "(5280, 'Sebastianópolis do Sul', 26),\n" +
    "(5281, 'Serra Azul', 26),\n" +
    "(5282, 'Serra Negra', 26),\n" +
    "(5283, 'Serrana', 26),\n" +
    "(5284, 'Sertãozinho', 26),\n" +
    "(5285, 'Sete Barras', 26),\n" +
    "(5286, 'Severínia', 26),\n" +
    "(5287, 'Silveiras', 26),\n" +
    "(5288, 'Socorro', 26),\n" +
    "(5289, 'Sorocaba', 26),\n" +
    "(5290, 'Sud Mennucci', 26),\n" +
    "(5291, 'Sumaré', 26),\n" +
    "(5292, 'Suzanápolis', 26),\n" +
    "(5293, 'Suzano', 26),\n" +
    "(5294, 'Tabapuã', 26),\n" +
    "(5295, 'Tabatinga', 26),\n" +
    "(5296, 'Taboão da Serra', 26),\n" +
    "(5297, 'Taciba', 26),\n" +
    "(5298, 'Taguaí', 26),\n" +
    "(5299, 'Taiaçu', 26),\n" +
    "(5300, 'Taiúva', 26),\n" +
    "(5301, 'Tambaú', 26),\n" +
    "(5302, 'Tanabi', 26),\n" +
    "(5303, 'Tapiraí', 26),\n" +
    "(5304, 'Tapiratiba', 26),\n" +
    "(5305, 'Taquaral', 26),\n" +
    "(5306, 'Taquaritinga', 26),\n" +
    "(5307, 'Taquarituba', 26),\n" +
    "(5308, 'Taquarivaí', 26),\n" +
    "(5309, 'Tarabai', 26),\n" +
    "(5310, 'Tarumã', 26),\n" +
    "(5311, 'Tatuí', 26),\n" +
    "(5312, 'Taubaté', 26),\n" +
    "(5313, 'Tejupá', 26),\n" +
    "(5314, 'Teodoro Sampaio', 26),\n" +
    "(5315, 'Terra Roxa', 26),\n" +
    "(5316, 'Tietê', 26),\n" +
    "(5317, 'Timburi', 26),\n" +
    "(5318, 'Torre de Pedra', 26),\n" +
    "(5319, 'Torrinha', 26),\n" +
    "(5320, 'Trabiju', 26),\n" +
    "(5321, 'Tremembé', 26),\n" +
    "(5322, 'Três Fronteiras', 26),\n" +
    "(5323, 'Tuiuti', 26),\n" +
    "(5324, 'Tupã', 26),\n" +
    "(5325, 'Tupi Paulista', 26),\n" +
    "(5326, 'Turiúba', 26),\n" +
    "(5327, 'Turmalina', 26),\n" +
    "(5328, 'Ubarana', 26),\n" +
    "(5329, 'Ubatuba', 26),\n" +
    "(5330, 'Ubirajara', 26),\n" +
    "(5331, 'Uchoa', 26),\n" +
    "(5332, 'União Paulista', 26),\n" +
    "(5333, 'Urânia', 26),\n" +
    "(5334, 'Uru', 26),\n" +
    "(5335, 'Urupês', 26),\n" +
    "(5336, 'Valentim Gentil', 26),\n" +
    "(5337, 'Valinhos', 26),\n" +
    "(5338, 'Valparaíso', 26),\n" +
    "(5339, 'Vargem', 26),\n" +
    "(5340, 'Vargem Grande do Sul', 26),\n" +
    "(5341, 'Vargem Grande Paulista', 26),\n" +
    "(5342, 'Várzea Paulista', 26),\n" +
    "(5343, 'Vera Cruz', 26),\n" +
    "(5344, 'Vinhedo', 26),\n" +
    "(5345, 'Viradouro', 26),\n" +
    "(5346, 'Vista Alegre do Alto', 26),\n" +
    "(5347, 'Vitória Brasil', 26),\n" +
    "(5348, 'Votorantim', 26),\n" +
    "(5349, 'Votuporanga', 26),\n" +
    "(5350, 'Zacarias', 26),\n" +
    "(5351, 'Amparo de São Francisco', 25),\n" +
    "(5352, 'Aquidabã', 25),\n" +
    "(5353, 'Aracaju', 25),\n" +
    "(5354, 'Arauá', 25),\n" +
    "(5355, 'Areia Branca', 25),\n" +
    "(5356, 'Barra dos Coqueiros', 25),\n" +
    "(5357, 'Boquim', 25),\n" +
    "(5358, 'Brejo Grande', 25),\n" +
    "(5359, 'Campo do Brito', 25),\n" +
    "(5360, 'Canhoba', 25),\n" +
    "(5361, 'Canindé de São Francisco', 25),\n" +
    "(5362, 'Capela', 25),\n" +
    "(5363, 'Carira', 25),\n" +
    "(5364, 'Carmópolis', 25),\n" +
    "(5365, 'Cedro de São João', 25),\n" +
    "(5366, 'Cristinápolis', 25),\n" +
    "(5367, 'Cumbe', 25),\n" +
    "(5368, 'Divina Pastora', 25),\n" +
    "(5369, 'Estância', 25),\n" +
    "(5370, 'Feira Nova', 25),\n" +
    "(5371, 'Frei Paulo', 25),\n" +
    "(5372, 'Gararu', 25),\n" +
    "(5373, 'General Maynard', 25),\n" +
    "(5374, 'Gracho Cardoso', 25),\n" +
    "(5375, 'Ilha das Flores', 25),\n" +
    "(5376, 'Indiaroba', 25),\n" +
    "(5377, 'Itabaiana', 25),\n" +
    "(5378, 'Itabaianinha', 25),\n" +
    "(5379, 'Itabi', 25),\n" +
    "(5380, 'Itaporanga dAjuda', 25),\n" +
    "(5381, 'Japaratuba', 25),\n" +
    "(5382, 'Japoatã', 25),\n" +
    "(5383, 'Lagarto', 25),\n" +
    "(5384, 'Laranjeiras', 25),\n" +
    "(5385, 'Macambira', 25),\n" +
    "(5386, 'Malhada dos Bois', 25),\n" +
    "(5387, 'Malhador', 25),\n" +
    "(5388, 'Maruim', 25),\n" +
    "(5389, 'Moita Bonita', 25),\n" +
    "(5390, 'Monte Alegre de Sergipe', 25),\n" +
    "(5391, 'Muribeca', 25),\n" +
    "(5392, 'Neópolis', 25),\n" +
    "(5393, 'Nossa Senhora Aparecida', 25),\n" +
    "(5394, 'Nossa Senhora da Glória', 25),\n" +
    "(5395, 'Nossa Senhora das Dores', 25),\n" +
    "(5396, 'Nossa Senhora de Lourdes', 25),\n" +
    "(5397, 'Nossa Senhora do Socorro', 25),\n" +
    "(5398, 'Pacatuba', 25),\n" +
    "(5399, 'Pedra Mole', 25),\n" +
    "(5400, 'Pedrinhas', 25),\n" +
    "(5401, 'Pinhão', 25),\n" +
    "(5402, 'Pirambu', 25),\n" +
    "(5403, 'Poço Redondo', 25),\n" +
    "(5404, 'Poço Verde', 25),\n" +
    "(5405, 'Porto da Folha', 25),\n" +
    "(5406, 'Propriá', 25),\n" +
    "(5407, 'Riachão do Dantas', 25),\n" +
    "(5408, 'Riachuelo', 25),\n" +
    "(5409, 'Ribeirópolis', 25),\n" +
    "(5410, 'Rosário do Catete', 25),\n" +
    "(5411, 'Salgado', 25),\n" +
    "(5412, 'Santa Luzia do Itanhy', 25),\n" +
    "(5413, 'Santa Rosa de Lima', 25),\n" +
    "(5414, 'Santana do São Francisco', 25),\n" +
    "(5415, 'Santo Amaro das Brotas', 25),\n" +
    "(5416, 'São Cristóvão', 25),\n" +
    "(5417, 'São Domingos', 25),\n" +
    "(5418, 'São Francisco', 25),\n" +
    "(5419, 'São Miguel do Aleixo', 25),\n" +
    "(5420, 'Simão Dias', 25),\n" +
    "(5421, 'Siriri', 25),\n" +
    "(5422, 'Telha', 25),\n" +
    "(5423, 'Tobias Barreto', 25),\n" +
    "(5424, 'Tomar do Geru', 25),\n" +
    "(5425, 'Umbaúba', 25),\n" +
    "(5426, 'Abreulândia', 27),\n" +
    "(5427, 'Aguiarnópolis', 27),\n" +
    "(5428, 'Aliança do Tocantins', 27),\n" +
    "(5429, 'Almas', 27),\n" +
    "(5430, 'Alvorada', 27),\n" +
    "(5431, 'Ananás', 27),\n" +
    "(5432, 'Angico', 27),\n" +
    "(5433, 'Aparecida do Rio Negro', 27),\n" +
    "(5434, 'Aragominas', 27),\n" +
    "(5435, 'Araguacema', 27),\n" +
    "(5436, 'Araguaçu', 27),\n" +
    "(5437, 'Araguaína', 27),\n" +
    "(5438, 'Araguanã', 27),\n" +
    "(5439, 'Araguatins', 27),\n" +
    "(5440, 'Arapoema', 27),\n" +
    "(5441, 'Arraias', 27),\n" +
    "(5442, 'Augustinópolis', 27),\n" +
    "(5443, 'Aurora do Tocantins', 27),\n" +
    "(5444, 'Axixá do Tocantins', 27),\n" +
    "(5445, 'Babaçulândia', 27),\n" +
    "(5446, 'Bandeirantes do Tocantins', 27),\n" +
    "(5447, 'Barra do Ouro', 27),\n" +
    "(5448, 'Barrolândia', 27),\n" +
    "(5449, 'Bernardo Sayão', 27),\n" +
    "(5450, 'Bom Jesus do Tocantins', 27),\n" +
    "(5451, 'Brasilândia do Tocantins', 27),\n" +
    "(5452, 'Brejinho de Nazaré', 27),\n" +
    "(5453, 'Buriti do Tocantins', 27),\n" +
    "(5454, 'Cachoeirinha', 27),\n" +
    "(5455, 'Campos Lindos', 27),\n" +
    "(5456, 'Cariri do Tocantins', 27),\n" +
    "(5457, 'Carmolândia', 27),\n" +
    "(5458, 'Carrasco Bonito', 27),\n" +
    "(5459, 'Caseara', 27),\n" +
    "(5460, 'Centenário', 27),\n" +
    "(5461, 'Chapada da Natividade', 27),\n" +
    "(5462, 'Chapada de Areia', 27),\n" +
    "(5463, 'Colinas do Tocantins', 27),\n" +
    "(5464, 'Colméia', 27),\n" +
    "(5465, 'Combinado', 27),\n" +
    "(5466, 'Conceição do Tocantins', 27),\n" +
    "(5467, 'Couto de Magalhães', 27),\n" +
    "(5468, 'Cristalândia', 27),\n" +
    "(5469, 'Crixás do Tocantins', 27),\n" +
    "(5470, 'Darcinópolis', 27),\n" +
    "(5471, 'Dianópolis', 27),\n" +
    "(5472, 'Divinópolis do Tocantins', 27),\n" +
    "(5473, 'Dois Irmãos do Tocantins', 27),\n" +
    "(5474, 'Dueré', 27),\n" +
    "(5475, 'Esperantina', 27),\n" +
    "(5476, 'Fátima', 27),\n" +
    "(5477, 'Figueirópolis', 27),\n" +
    "(5478, 'Filadélfia', 27),\n" +
    "(5479, 'Formoso do Araguaia', 27),\n" +
    "(5480, 'Fortaleza do Tabocão', 27),\n" +
    "(5481, 'Goianorte', 27),\n" +
    "(5482, 'Goiatins', 27),\n" +
    "(5483, 'Guaraí', 27),\n" +
    "(5484, 'Gurupi', 27),\n" +
    "(5485, 'Ipueiras', 27),\n" +
    "(5486, 'Itacajá', 27),\n" +
    "(5487, 'Itaguatins', 27),\n" +
    "(5488, 'Itapiratins', 27),\n" +
    "(5489, 'Itaporã do Tocantins', 27),\n" +
    "(5490, 'Jaú do Tocantins', 27),\n" +
    "(5491, 'Juarina', 27),\n" +
    "(5492, 'Lagoa da Confusão', 27),\n" +
    "(5493, 'Lagoa do Tocantins', 27),\n" +
    "(5494, 'Lajeado', 27),\n" +
    "(5495, 'Lavandeira', 27),\n" +
    "(5496, 'Lizarda', 27),\n" +
    "(5497, 'Luzinópolis', 27),\n" +
    "(5498, 'Marianópolis do Tocantins', 27),\n" +
    "(5499, 'Mateiros', 27),\n" +
    "(5500, 'Maurilândia do Tocantins', 27),\n" +
    "(5501, 'Miracema do Tocantins', 27),\n" +
    "(5502, 'Miranorte', 27),\n" +
    "(5503, 'Monte do Carmo', 27),\n" +
    "(5504, 'Monte Santo do Tocantins', 27),\n" +
    "(5505, 'Muricilândia', 27),\n" +
    "(5506, 'Natividade', 27),\n" +
    "(5507, 'Nazaré', 27),\n" +
    "(5508, 'Nova Olinda', 27),\n" +
    "(5509, 'Nova Rosalândia', 27),\n" +
    "(5510, 'Novo Acordo', 27),\n" +
    "(5511, 'Novo Alegre', 27),\n" +
    "(5512, 'Novo Jardim', 27),\n" +
    "(5513, 'Oliveira de Fátima', 27),\n" +
    "(5514, 'Palmas', 27),\n" +
    "(5515, 'Palmeirante', 27),\n" +
    "(5516, 'Palmeiras do Tocantins', 27),\n" +
    "(5517, 'Palmeirópolis', 27),\n" +
    "(5518, 'Paraíso do Tocantins', 27),\n" +
    "(5519, 'Paranã', 27),\n" +
    "(5520, 'Pau dArco', 27),\n" +
    "(5521, 'Pedro Afonso', 27),\n" +
    "(5522, 'Peixe', 27),\n" +
    "(5523, 'Pequizeiro', 27),\n" +
    "(5524, 'Pindorama do Tocantins', 27),\n" +
    "(5525, 'Piraquê', 27),\n" +
    "(5526, 'Pium', 27),\n" +
    "(5527, 'Ponte Alta do Bom Jesus', 27),\n" +
    "(5528, 'Ponte Alta do Tocantins', 27),\n" +
    "(5529, 'Porto Alegre do Tocantins', 27),\n" +
    "(5530, 'Porto Nacional', 27),\n" +
    "(5531, 'Praia Norte', 27),\n" +
    "(5532, 'Presidente Kennedy', 27),\n" +
    "(5533, 'Pugmil', 27),\n" +
    "(5534, 'Recursolândia', 27),\n" +
    "(5535, 'Riachinho', 27),\n" +
    "(5536, 'Rio da Conceição', 27),\n" +
    "(5537, 'Rio dos Bois', 27),\n" +
    "(5538, 'Rio Sono', 27),\n" +
    "(5539, 'Sampaio', 27),\n" +
    "(5540, 'Sandolândia', 27),\n" +
    "(5541, 'Santa Fé do Araguaia', 27),\n" +
    "(5542, 'Santa Maria do Tocantins', 27),\n" +
    "(5543, 'Santa Rita do Tocantins', 27),\n" +
    "(5544, 'Santa Rosa do Tocantins', 27),\n" +
    "(5545, 'Santa Tereza do Tocantins', 27),\n" +
    "(5546, 'Santa Terezinha do Tocantins', 27),\n" +
    "(5547, 'São Bento do Tocantins', 27),\n" +
    "(5548, 'São Félix do Tocantins', 27),\n" +
    "(5549, 'São Miguel do Tocantins', 27),\n" +
    "(5550, 'São Salvador do Tocantins', 27),\n" +
    "(5551, 'São Sebastião do Tocantins', 27),\n" +
    "(5552, 'São Valério da Natividade', 27),\n" +
    "(5553, 'Silvanópolis', 27),\n" +
    "(5554, 'Sítio Novo do Tocantins', 27),\n" +
    "(5555, 'Sucupira', 27),\n" +
    "(5556, 'Taguatinga', 27),\n" +
    "(5557, 'Taipas do Tocantins', 27),\n" +
    "(5558, 'Talismã', 27),\n" +
    "(5559, 'Tocantínia', 27),\n" +
    "(5560, 'Tocantinópolis', 27),\n" +
    "(5561, 'Tupirama', 27),\n" +
    "(5562, 'Tupiratins', 27),\n" +
    "(5563, 'Wanderlândia', 27),\n" +
    "(5564, 'Xambioá', 27);";

const sql = [sql1, sql2, sql3, sql4, sql5, sql6, sql7, sql8, sql9, sql10, sql11];

for (let i in sql) {
    connection.query(sql[i], function (err, result) {
        if (err) throw err;
        console.log("Data inserted on table cities");
    });
}

