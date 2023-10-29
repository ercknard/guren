import React, { Component } from "react";
import Layout from "@/layout/Layout";
import Head from "next/head";
import ContactUs from "@/components/Email";

type Props = {};

type State = {};

export default class Contact extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Head>
          <title>Ercknard | Contact</title>
        </Head>
        <Layout>
          <section>
            <div className="landing-for-down" />
            <div className="to-background" />
            <div className="to-big to-width">
              <div className="content-pages">
                <div className="main-title text-effect">Contact</div>
                <div className="normal-text">
                  {/* {""}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet dictum sit amet justo. Lacus sed viverra tellus in hac.
                  Massa tempor nec feugiat nisl pretium fusce id velit ut.
                  Aliquam nulla facilisi cras fermentum odio. Amet venenatis
                  urna cursus eget nunc. Orci dapibus ultrices in iaculis. In
                  aliquam sem fringilla ut morbi tincidunt augue interdum. Fames
                  ac turpis egestas sed tempus urna. Feugiat nisl pretium fusce
                  id velit ut tortor. Eget nullam non nisi est sit. Nulla
                  posuere sollicitudin aliquam ultrices sagittis orci a. Mi quis
                  hendrerit dolor magna eget est lorem ipsum. Nulla pellentesque
                  dignissim enim sit amet venenatis. Diam sit amet nisl
                  suscipit. Morbi tincidunt augue interdum velit euismod in.
                  Enim tortor at auctor urna nunc id cursus metus aliquam.
                  Facilisis gravida neque convallis a cras semper auctor. Nulla
                  pharetra diam sit amet nisl suscipit. Morbi tristique senectus
                  et netus et malesuada fames ac. Ut etiam sit amet nisl purus.
                  Enim lobortis scelerisque fermentum dui faucibus. Ut placerat
                  orci nulla pellentesque. Phasellus egestas tellus rutrum
                  tellus pellentesque. Vivamus at augue eget arcu dictum varius
                  duis at consectetur. Et leo duis ut diam quam nulla. Justo nec
                  ultrices dui sapien. Suspendisse in est ante in nibh mauris
                  cursus mattis molestie. Elementum tempus egestas sed sed. Eget
                  est lorem ipsum dolor sit amet. Odio pellentesque diam
                  volutpat commodo sed egestas egestas. Eu scelerisque felis
                  imperdiet proin fermentum leo vel orci porta. Sapien
                  pellentesque habitant morbi tristique senectus et. Vel
                  pharetra vel turpis nunc eget lorem dolor sed. Viverra vitae
                  congue eu consequat ac felis donec et odio. Quis enim lobortis
                  scelerisque fermentum. Sed adipiscing diam donec adipiscing.
                  Orci porta non pulvinar neque laoreet suspendisse interdum.
                  Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
                  Sodales ut etiam sit amet nisl purus in. Eu turpis egestas
                  pretium aenean. Et netus et malesuada fames ac turpis egestas
                  integer eget. Quis hendrerit dolor magna eget est lorem ipsum.
                  Arcu dictum varius duis at consectetur lorem donec massa
                  sapien. Eros in cursus turpis massa tincidunt dui. At ultrices
                  mi tempus imperdiet nulla malesuada pellentesque elit eget.
                  Tincidunt tortor aliquam nulla facilisi cras fermentum. Donec
                  pretium vulputate sapien nec sagittis aliquam. Ut enim blandit
                  volutpat maecenas volutpat blandit aliquam etiam erat. Urna
                  porttitor rhoncus dolor purus non enim praesent elementum
                  facilisis. Sodales ut eu sem integer vitae justo eget magna
                  fermentum. Integer feugiat scelerisque varius morbi enim nunc
                  faucibus a. Sagittis orci a scelerisque purus semper eget.
                  Amet venenatis urna cursus eget nunc scelerisque viverra
                  mauris in. Pulvinar sapien et ligula ullamcorper malesuada
                  proin libero nunc consequat. Amet aliquam id diam maecenas
                  ultricies mi eget mauris pharetra. Id velit ut tortor pretium
                  viverra suspendisse. Sit amet aliquam id diam. Mattis nunc sed
                  blandit libero volutpat. Turpis massa tincidunt dui ut ornare
                  lectus sit amet. Adipiscing elit ut aliquam purus sit amet
                  luctus. Ornare massa eget egestas purus viverra accumsan in
                  nisl. Scelerisque purus semper eget duis at. Auctor neque
                  vitae tempus quam pellentesque nec nam aliquam. Felis bibendum
                  ut tristique et. Leo duis ut diam quam nulla. Cum sociis
                  natoque penatibus et magnis dis parturient montes nascetur.
                  Lacus vestibulum sed arcu non odio euismod lacinia at. Sed
                  faucibus turpis in eu mi. Feugiat nibh sed pulvinar proin.
                  Eget arcu dictum varius duis at consectetur lorem. Felis eget
                  nunc lobortis mattis aliquam faucibus purus in massa. Sit amet
                  dictum sit amet justo donec enim diam. Habitant morbi
                  tristique senectus et netus et. Magnis dis parturient montes
                  nascetur ridiculus mus. Mi quis hendrerit dolor magna eget.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet dictum sit amet justo. Lacus sed viverra tellus in hac.
                  Massa tempor nec feugiat nisl pretium fusce id velit ut.
                  Aliquam nulla facilisi cras fermentum odio. Amet venenatis
                  urna cursus eget nunc. Orci dapibus ultrices in iaculis. In
                  aliquam sem fringilla ut morbi tincidunt augue interdum. Fames
                  ac turpis egestas sed tempus urna. Feugiat nisl pretium fusce
                  id velit ut tortor. Eget nullam non nisi est sit. Nulla
                  posuere sollicitudin aliquam ultrices sagittis orci a. Mi quis
                  hendrerit dolor magna eget est lorem ipsum. Nulla pellentesque
                  dignissim enim sit amet venenatis. Diam sit amet nisl
                  suscipit. Morbi tincidunt augue interdum velit euismod in.
                  Enim tortor at auctor urna nunc id cursus metus aliquam.
                  Facilisis gravida neque convallis a cras semper auctor. Nulla
                  pharetra diam sit amet nisl suscipit. Morbi tristique senectus
                  et netus et malesuada fames ac. Ut etiam sit amet nisl purus.
                  Enim lobortis scelerisque fermentum dui faucibus. Ut placerat
                  orci nulla pellentesque. Phasellus egestas tellus rutrum
                  tellus pellentesque. Vivamus at augue eget arcu dictum varius
                  duis at consectetur. Et leo duis ut diam quam nulla. Justo nec
                  ultrices dui sapien. Suspendisse in est ante in nibh mauris
                  cursus mattis molestie. Elementum tempus egestas sed sed. Eget
                  est lorem ipsum dolor sit amet. Odio pellentesque diam
                  volutpat commodo sed egestas egestas. Eu scelerisque felis
                  imperdiet proin fermentum leo vel orci porta. Sapien
                  pellentesque habitant morbi tristique senectus et. Vel
                  pharetra vel turpis nunc eget lorem dolor sed. Viverra vitae
                  congue eu consequat ac felis donec et odio. Quis enim lobortis
                  scelerisque fermentum. Sed adipiscing diam donec adipiscing.
                  Orci porta non pulvinar neque laoreet suspendisse interdum.
                  Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
                  Sodales ut etiam sit amet nisl purus in. Eu turpis egestas
                  pretium aenean. Et netus et malesuada fames ac turpis egestas
                  integer eget. Quis hendrerit dolor magna eget est lorem ipsum.
                  Arcu dictum varius duis at consectetur lorem donec massa
                  sapien. Eros in cursus turpis massa tincidunt dui. At ultrices
                  mi tempus imperdiet nulla malesuada pellentesque elit eget.
                  Tincidunt tortor aliquam nulla facilisi cras fermentum. Donec
                  pretium vulputate sapien nec sagittis aliquam. Ut enim blandit
                  volutpat maecenas volutpat blandit aliquam etiam erat. Urna
                  porttitor rhoncus dolor purus non enim praesent elementum
                  facilisis. Sodales ut eu sem integer vitae justo eget magna
                  fermentum. Integer feugiat scelerisque varius morbi enim nunc
                  faucibus a. Sagittis orci a scelerisque purus semper eget.
                  Amet venenatis urna cursus eget nunc scelerisque viverra
                  mauris in. Pulvinar sapien et ligula ullamcorper malesuada
                  proin libero nunc consequat. Amet aliquam id diam maecenas
                  ultricies mi eget mauris pharetra. Id velit ut tortor pretium
                  viverra suspendisse. Sit amet aliquam id diam. Mattis nunc sed
                  blandit libero volutpat. Turpis massa tincidunt dui ut ornare
                  lectus sit amet. Adipiscing elit ut aliquam purus sit amet
                  luctus. Ornare massa eget egestas purus viverra accumsan in
                  nisl. Scelerisque purus semper eget duis at. Auctor neque
                  vitae tempus quam pellentesque nec nam aliquam. Felis bibendum
                  ut tristique et. Leo duis ut diam quam nulla. Cum sociis
                  natoque penatibus et magnis dis parturient montes nascetur.
                  Lacus vestibulum sed arcu non odio euismod lacinia at. Sed
                  faucibus turpis in eu mi. Feugiat nibh sed pulvinar proin.
                  Eget arcu dictum varius duis at consectetur lorem. Felis eget
                  nunc lobortis mattis aliquam faucibus purus in massa. Sit amet
                  dictum sit amet justo donec enim diam. Habitant morbi
                  tristique senectus et netus et. Magnis dis parturient montes
                  nascetur ridiculus mus. Mi quis hendrerit dolor magna eget. */}
                  {/* <ContactUs /> */}
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}
