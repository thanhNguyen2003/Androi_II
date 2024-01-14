import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Color, FontSize } from "../../GlobalStyles";


const ListProduct = ({ navigation }) => {



  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Bag')}>

          <Image
            source={{
              uri: item.uri,
            }}
            style={styles.itemPhoto}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>


      <SafeAreaView >
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          scrollEnabled={false}

          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  columnWrapperStyle={styles.row}
                  numColumns={2}
                  data={section.data}
                  renderItem={({ item }) =>
                    <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
          maxToRenderPerBatch={10}
          windowSize={10}
        />
      </SafeAreaView>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {

    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    right: 8,
    overflow: "hidden",
    justifyContent: "space-between"

  },

  sectionHeader: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 5,
    left: 5,
  },
  item: {
    marginHorizontal: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "black",
    marginTop: 5,
  },
  slidersIcon: {
    left: 340,
    position: "absolute",
  },
  //

});
export default ListProduct;